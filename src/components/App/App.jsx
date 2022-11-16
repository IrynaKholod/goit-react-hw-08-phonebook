import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import {Container, MainTitle, Title} from './App.styled';

export class App extends Component {
  state = {
    contacts: [ ],
    filter: ''
  };
  addContact = ({id, name, number}) => {
    const isNameAdded = name.toUpperCase();
    let isAdded = this.state.contacts.find(el => {
     return (el.name.toUpperCase() === isNameAdded) 
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
      isAdded = true;
      return;
    }
    const contact = {
      id,
      name,
      number
    }

    this.setState(prevState =>({
    contacts: [contact, ...prevState.contacts]
    }));
  };

  changeFilter = (e) =>{
    this.setState({filter: e.currentTarget.value})
  };

  getName =() => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  render() {
   const searchResults = this.getName();

    return (
      <Container>
        < MainTitle>
          Phonebook
        </ MainTitle>

         <ContactForm onSubmit={this.addContact} />

        <Title>
          Contacts
        </Title>

         <Filter value={this.state.filter}
                onChange={this.changeFilter}/>

         <ContactList contacts={searchResults}
         onDeleteContact={this.deleteContact}/> 

      </Container>
    );
  }
}
