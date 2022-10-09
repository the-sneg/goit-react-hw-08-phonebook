import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/reducer';
import s from '../Filter/Filter.module.css';

export const Filter = () => {
  const value = useSelector(state => state.contactsSlice.contacts.filter.value);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
