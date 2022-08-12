import React from 'react';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filterLable}>
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
