import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const handleInputChange = ({ currentTarget: { value } }) => {
    setText(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim() === '') {
      return toast.error('Поле не должно быть пустым');
    }

    onSubmit(text);
    setText('');
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <ImSearch />
        </button>
        <input
          className={s.input}
          type="text"
          name="text"
          value={text}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
