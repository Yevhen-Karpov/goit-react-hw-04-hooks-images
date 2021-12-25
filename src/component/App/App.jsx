import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function App() {
  const [text, setText] = useState('');

  const handleFormSubmit = text => {
    setText(text);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery text={text} />
      <ToastContainer />
    </div>
  );
}
