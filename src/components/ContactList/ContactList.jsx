git remote add origin https://github.com/IrynaKholod/goit-react-hw-04-phonebook.gitimport PropTypes from 'prop-types';
import {List, ContactItem, DeleteButton, ContactName } from './ContactList.styled'
import { FiUserMinus } from "react-icons/fi";

  const ContactList = ({ contacts, onDeleteContact  }) => (
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton
              type="submit"
              onClick={() => onDeleteContact(id)}
            >
             <FiUserMinus/>
            </DeleteButton>
          </ContactItem>
        ))}
      </List>
    );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


  export default ContactList;