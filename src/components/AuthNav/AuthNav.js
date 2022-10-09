import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration" className={s.btn}>
        Registration
      </NavLink>
      <NavLink to="/login" className={s.btn}>
        Login
      </NavLink>
    </div>
  );
}
