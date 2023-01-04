import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  ContactItem,
  DeleteButton,
  ContactName,
} from './ContactList.styled';
import { FiUserMinus } from 'react-icons/fi';
import { deleteContact, getContactsData } from 'Redax/ContactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsData);
  const filter = useSelector(state => state.filter.filter);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  console.log(visibleContacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactName>
            {name}: {number}
          </ContactName>
          <DeleteButton type="submit" onClick={() => onDeleteContact(id)}>
            <FiUserMinus />
          </DeleteButton>
        </ContactItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
