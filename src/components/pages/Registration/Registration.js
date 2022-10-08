import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/userReducer';
import { nanoid } from 'nanoid';
import s from '../Registration/Registration.module.css';

let inputEmailId = nanoid();
let inputNameId = nanoid();
let inputPasswordId = nanoid();

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    if (e.target.name === 'email') {
      return setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      return setPassword(e.target.value);
    } else if (e.target.name === 'name') {
      return setName(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addUser({ name, email, password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className={s.title}>Registration</h2>
        <p className={s.subtitle}>
          Please fill in this form to create an account.
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

          <label className={s.name} htmlFor={inputNameId}>
            <b>Name</b>
          </label>
          <input
            onInput={handleInputChange}
            className={s.input}
            value={name}
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            id={inputNameId}
          ></input>
        </div>

        <p className={s.haveacc}>
          Have an account?
          <NavLink className={s.signin} to="/login">
            Sign in
          </NavLink>
          .
        </p>

        <button className={s.btn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};
