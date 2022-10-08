import { Form } from '../../Form/Form';
import { ContactList } from '../../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import s from '../Contacts/Contacts.module.css';

export const Contacts = () => {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <Form />

      <Filter />

      <h2 className={s.title}>Contacts</h2>

      <ContactList />
    </>
  );
};
