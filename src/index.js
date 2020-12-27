import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-slideshow-image/dist/styles.css'
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css"
import { CometChat } from '@cometchat-pro/chat';

 
var appID = "255028b6ef4d379";
var region = "REGION";
var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  error => {
    console.log("Initialization failed with error:", error);
  }
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
