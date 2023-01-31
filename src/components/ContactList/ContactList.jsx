import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getError } from '../../Redax/Selectors';
import {
  List,
  ContactItem,
  DeleteButton,
  ContactName,
} from './ContactList.styled';
import { FiUserMinus } from 'react-icons/fi';
import { fetchContacts, deleteContact } from '../../Redax/Operations';
import { getVisibleContacts } from 'Redax/Selectors';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {error && (
        <p>Ups... Something going wrong! Please, refresh page and try again!</p>
      )}
      {isLoading && <b>Loading...</b>}
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactName>
              {name}: {phone}
            </ContactName>
            <DeleteButton type="submit" onClick={() => onDeleteContact(id)}>
              <FiUserMinus />
            </DeleteButton>
          </ContactItem>
        ))}
    </List>
  );
};
