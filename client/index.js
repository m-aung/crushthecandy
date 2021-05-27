/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import App from './components/App.jsx';
import '../stylesheets/style.css';

render(<App />, document.querySelector('#app'));
