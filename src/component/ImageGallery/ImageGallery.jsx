import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import ImageGalleryItem from '../ImageGallery/ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import api from '../../services/apiService';
import s from './ImageGallery.module.css';

export default function ImageGallery({ text }) {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!text) {
      return;
    }
    setPage(1);
    setCards([]);
    setStatus('pending');
    handleRenderPage();
    scroll.scrollToBottom();
    // eslint-disable-next-line
  }, [text]);

  const handleRenderPage = async () => {
    try {
      const { hits } = await api.fetchApi(text);
      setCards([...hits]);
      setStatus('resolved');
      setPage(prevState => prevState + 1);
    } catch (e) {
      setStatus('rejected');
    }
  };

  const handleAddPage = async () => {
    try {
      const { hits } = await api.fetchApi(text, page);
      setCards([...cards, ...hits]);
      setStatus('resolved');
      setPage(prevState => prevState + 1);
    } catch (e) {
      setStatus('rejected');
    }
  };

  return (
    <>
      {status === 'idle' && (
        <p className={s.text}>Введите слово, чтобы начать поиск.</p>
      )}

      {status === 'pending' && <Loader />}

      {!cards.length && status === 'resolved' && (
        <p className={s.text}>Нет результатов поиска по данному запросу.</p>
      )}

      {cards.length !== 0 && status === 'resolved' && (
        <>
          <ul className={s.gallery}>
            {cards.map(card => (
              <ImageGalleryItem card={card} key={card.id} />
            ))}
          </ul>
          <Button onClick={handleAddPage} />
        </>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
