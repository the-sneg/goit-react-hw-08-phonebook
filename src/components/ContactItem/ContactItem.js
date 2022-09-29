import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../store/reducer';
import { ThreeDots } from 'react-loader-spinner';
import s from './ContactItem.module.css';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(state => state.contactsSlice.isDeleting);
  return (
    <li className={s.item}>
      <p className={s.name}>{item.name}</p> :{' '}
      <p className={s.number}>{item.phone}</p>
      <button
        type="button"
        className={s.delete}
        disabled={isDeleting}
        onClick={() => dispatch(deleteContacts(item.id))}
      >
        {isDeleting ? <ThreeDots width={40} height={14} /> : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.prototype = {
  item: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};
