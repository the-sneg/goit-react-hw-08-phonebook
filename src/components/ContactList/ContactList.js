import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ul className={s.list}>
      {contacts.map(item => (
        <ContactItem key={item.id} item={item} onDeleteClick={onDeleteClick} />
      ))}
    </ul>
  );
};
