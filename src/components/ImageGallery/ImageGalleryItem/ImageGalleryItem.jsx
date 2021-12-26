import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ card }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <li key={card.id} className={s.imageGalleryItem}>
      <img
        onClick={toggleModal}
        src={card.webformatURL}
        alt={card.tags}
        className={s.imageGalleryItemImage}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={card.largeImageURL} alt={card.tags} />
      )}
    </li>
  );
}
