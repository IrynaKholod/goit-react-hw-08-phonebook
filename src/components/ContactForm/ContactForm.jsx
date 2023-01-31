import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { FormField, AddContactBtn, FieldInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../Redax/Operations';
import { getContacts } from '../../Redax/Selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (
      items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name: name, number: number }));
    e.target.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handlerSubmit}>
      <FormField>
        Name
        <FieldInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
          onChange={handlerChange}
        />
      </FormField>
      <FormField>
        Number
        <FieldInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="987-65-43"
          required
          onChange={handlerChange}
        />
      </FormField>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
      <Toaster />
    </form>
  );
};
