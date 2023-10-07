import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormStyle,
  LabelStyle,
  FieldStyle,
  ButtonStyle,
} from './ContactsForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const isNameNotUnique = (name, savedOurContacts) => {
    return savedOurContacts.some(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
  };

  const savedOurContacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, actions) => {
    if (!isNameNotUnique(name, savedOurContacts)) {
      dispatch(addContact({ name, phone }));
    } else {
      alert(`${name} is already in contacts`);
    }
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
        <FormStyle>
          <LabelStyle>
            Name
            <FieldStyle
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelStyle>
          <LabelStyle>
            Number
            <FieldStyle
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelStyle>
          <ButtonStyle type="submit">Add contact</ButtonStyle>
        </FormStyle>
      </Formik>
    </div>
  );
};
