import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../store/reducer';
import s from './ContactItem.module.css';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.name}>{item.name}</p> :{' '}
      <p className={s.number}>{item.number}</p>
      <button
        type="button"
        className={s.delete}
        onClick={() => dispatch(removeContact(item.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.prototype = {
  item: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.id,
  }),
};
