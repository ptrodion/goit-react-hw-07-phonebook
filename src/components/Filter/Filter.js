import { useDispatch } from 'react-redux';
import { ContactsFilterByName, ContactsFilterTitle } from './Filter.styled';
import { filter } from 'redux/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = evt => dispatch(filter(evt.target.value));
  return (
    <div>
      <ContactsFilterTitle>Contacts</ContactsFilterTitle>
      <label>
        Find contacts by name
        <ContactsFilterByName
          type="text"
          name="filter"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
