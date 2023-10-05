import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactsList isFilteredContacts={filteredContacts} />
      <GlobalStyle />
    </Layout>
  );
};
