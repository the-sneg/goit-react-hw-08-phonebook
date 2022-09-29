import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../store/reducer';
import { nanoid } from 'nanoid';
import { Oval } from 'react-loader-spinner';
import s from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsSlice.contacts.items);
  const filterValue = useSelector(
    state => state.contactsSlice.contacts.filter.value
  );
  const isLoading = useSelector(state => state.contactsSlice.isLoading);
  const error = useSelector(state => state.contactsSlice.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const filterValueTolowerCase = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValueTolowerCase)
    );
  };

  let filtredContacts = getVisibleContacts();

  return (
    <ul className={s.list}>
      {error && <li>{error}</li>}
      {isLoading && <Oval width={30} height={30} />}

      {filtredContacts.map(item => (
        <ContactItem key={nanoid()} item={item} />
      ))}
    </ul>
  );
};
