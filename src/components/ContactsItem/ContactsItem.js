import { useDispatch } from 'react-redux';
import { ListItemSt, ListItemButtonSt } from './ContactsItem.styled';
import { deleteContact } from 'redux/contacts';

export const ContactsItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ListItemSt key={id}>
      <p>
        {name} : {number}
      </p>
      <ListItemButtonSt
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ListItemButtonSt>
    </ListItemSt>
  );
};
