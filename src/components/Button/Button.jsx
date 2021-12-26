import React from 'react';
import s from './Button.module.css';

export default function Button({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" className={s.button} onClick={handleClick}>
      Load more
    </button>
  );
}
