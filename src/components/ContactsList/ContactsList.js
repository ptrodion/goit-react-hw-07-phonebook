import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper, ContactsListSt } from './ContactsList.styles';

export const ContactsList = ({ isFilteredContacts }) => {
  return (
    <ContactsWrapper>
      {isFilteredContacts.length !== 0 && (
        <>
          <ContactsListSt>
            {isFilteredContacts.map(item => (
              <ContactsItem key={item.id} item={item} />
            ))}
          </ContactsListSt>
        </>
      )}
    </ContactsWrapper>
  );
};
