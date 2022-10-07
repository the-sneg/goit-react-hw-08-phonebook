import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/registration"
        className={s.registration}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={s.login}
      >
        Login
      </NavLink>
    </div>
  );
}
