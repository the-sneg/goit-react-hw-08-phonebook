import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/userReducer';
import { nanoid } from 'nanoid';
import s from '../Login/Login.module.css';

let inputEmailId = nanoid();
let inputPasswordId = nanoid();

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    if (e.target.name === 'email') {
      return setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      return setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className={s.title}>Login</h2>
        <p className={s.subtitle}>
          Please fill in this form to login an account.
        </p>

        <div className={s.wrap}>
          <label className={s.email} htmlFor={inputEmailId}>
            <b>Email</b>
          </label>
          <input
            onInput={handleInputChange}
            className={s.input}
            value={email}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            id={inputEmailId}
          ></input>

          <label className={s.password} htmlFor={inputPasswordId}>
            <b>Password</b>
          </label>
          <input
            onInput={handleInputChange}
            className={s.input}
            value={password}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            id={inputPasswordId}
          ></input>
        </div>

        <p className={s.dont}>
          Don't have account?
          <NavLink className={s.sign} to="/registration">
            Sign up
          </NavLink>
        </p>

        <button className={s.btn} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
