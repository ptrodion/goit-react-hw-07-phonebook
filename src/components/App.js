import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectContacts);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchContacts(signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && <Loader />}

      <ContactForm />
      <Filter />

      {items.length > 0 && <ContactsList />}

      <GlobalStyle />
    </Layout>
  );
};
