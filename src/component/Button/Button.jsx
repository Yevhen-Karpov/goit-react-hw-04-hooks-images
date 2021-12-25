import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css';

export default function Button({ onClick }) {
  const handleClick = () => {
    onClick();
    scroll.scrollToBottom();
  };

  return (
    <button type="button" className={s.button} onClick={handleClick}>
      Load more
    </button>
  );
}
