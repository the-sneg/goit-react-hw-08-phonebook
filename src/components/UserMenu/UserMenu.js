import { Logout } from 'components/pages/Logout/Logout';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s.wrap}>
      <NavLink to="/contacts" className={s.btn}>
        Contacts
      </NavLink>
      <Logout />
    </div>
  );
}
