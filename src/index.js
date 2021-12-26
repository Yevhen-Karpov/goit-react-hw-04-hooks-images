import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import s from '../src/components/App/App.module.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={s.app} />
  </React.StrictMode>,
  document.getElementById('root'),
);
