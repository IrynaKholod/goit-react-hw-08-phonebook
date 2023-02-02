import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList';
import { fetchContacts } from '../Redax/Operations';
import { getIsLoading } from '../Redax/Selectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { Container } from '../Pages/Pages.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </Container>
  );
}