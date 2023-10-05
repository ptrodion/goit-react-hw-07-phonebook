import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { selectVisibleContacts } from 'redux/selectors';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactsList isFilteredContacts={selectVisibleContacts} />
      <GlobalStyle />
    </Layout>
  );
};
