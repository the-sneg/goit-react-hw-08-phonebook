import { Logout } from 'components/pages/Logout/Logout';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css'

export default function UserMenu() {
  return (
    <div>
      <NavLink
        to="/contacts"
        className={s.contacts}
      >
        Contacts
      </NavLink>
      <Logout className="hover:text-black active:text-black  focus:text-black" />
    </div>
  );
}
