import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper, ContactsListSt } from './ContactsList.styles';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ContactsWrapper>
      <>
        <ContactsListSt>
          {visibleContacts.map(item => (
            <ContactsItem key={item.id} item={item} />
          ))}
        </ContactsListSt>
      </>
    </ContactsWrapper>
  );
};
