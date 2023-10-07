import { useDispatch } from 'react-redux';
import {
  ListItemSt,
  ListItemButtonSt,
  ContactsDate,
} from './ContactsItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactsItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <ListItemSt key={id}>
      <ContactsDate>
        <span>{phone}</span> <span>{name}</span>
      </ContactsDate>
      <ListItemButtonSt
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ListItemButtonSt>
    </ListItemSt>
  );
};
