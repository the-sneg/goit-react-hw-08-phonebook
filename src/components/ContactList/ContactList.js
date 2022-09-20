import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsSlice.contacts.items);
  const filterValue = useSelector(
    state => state.contactsSlice.contacts.filter.value
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const filterValueTolowerCase = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValueTolowerCase)
    );
  };

  let filtredContacts = getVisibleContacts();

  return (
    <ul className={s.list}>
      {filtredContacts.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
