import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/userReducer';
import { nanoid } from 'nanoid';

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
        <h2 className="text-2xl text-center">Registration</h2>
        <p className="my-3 text-center">
          Please fill in this form to create an account.
        </p>
        <div className="flex flex-col my-3 items-center border bg-gray-200 ">
          <label className="my-2" htmlFor={inputEmailId}>
            <b>Email</b>
          </label>
          <input
            onInput={handleInputChange}
            className="border rounded-xl px-2 w-1/2 "
            value={email}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            id={inputEmailId}
          ></input>

          <label className="my-2" htmlFor={inputPasswordId}>
            <b>Password</b>
          </label>
          <input
            onInput={handleInputChange}
            className="border rounded-xl px-2 w-1/2 "
            value={password}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            id={inputPasswordId}
          ></input>

          <label className="my-2" htmlFor={inputNameId}>
            <b>Name</b>
          </label>
          <input
            onInput={handleInputChange}
            className="border rounded-xl px-2 w-1/2 mb-3 "
            value={name}
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            id={inputNameId}
          ></input>
        </div>

        <p className="text-center">
          Already have an account?
          <NavLink className="text-sky-500 underline ml-1" to="/login">
            Sign in
          </NavLink>
          .
        </p>

        <button
          className="border rounded-xl bg-orange-600 py-1 px-3
                 hover:text-white display: flex items-center justify-center m-auto
                 my-3  "
          type="submit"
        >
          Sign up
        </button>
      </form>
    </>
  );
};
