import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-slideshow-image/dist/styles.css'
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";
import { Provider } from 'react-redux'
import store from './store/store';

 
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
