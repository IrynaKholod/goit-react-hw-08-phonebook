import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, MainTitle, Title } from './App.styled';


export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ id, name, number }) => {
    const isNameAdded = name.toLowerCase();
    let isAdded = contacts.find(el => {
      return el.name.toLowerCase() === isNameAdded;
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
      isAdded = true;
      return;
    }
    const contact = {
      id,
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    return setContacts(contacts.filter(contact => contact.id !== id))
    };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>

      <ContactForm onSubmit={addContact} />

      <Title>Contacts</Title>

      <Filter value={filter} onChange={changeFilter} />

      <ContactList contacts={getName} onDeleteContact={deleteContact} />
    </Container>
  );
}

