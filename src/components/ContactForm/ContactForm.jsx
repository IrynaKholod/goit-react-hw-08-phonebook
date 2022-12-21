import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {FormField, AddContactBtn} from './ContactForm.styled';
import React from 'react';

const ContactForm = ({ onSubmit }) => {
  
  const hendleSubmit = (values, { resetForm }) => {
    const  {name, number} = values;
    const id = nanoid();
   
    if (onSubmit({ id, name, number })) {
      resetForm();
    }
    resetForm();
    
  };

  const initialValues = { name: '', number: '' };


  return (
    
    <Formik 
    initialValues={initialValues}
    onSubmit={hendleSubmit}
    >
      <Form autoComplete="off">
        <FormField >
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          />
          <ErrorMessage name="name" component='div' />
        </FormField >
        <FormField >
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="987-65-43"
            required
          />
          <ErrorMessage name="number" component='div' />
        </FormField>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
 export default ContactForm;
