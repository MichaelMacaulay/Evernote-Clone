import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore'


firebase.initializeApp({
  apiKey: "REACT_APP_SECRET_1",
  authDomain: "REACT_APP_SECRET_2",
  databaseURL: "REACT_APP_SECRET_3",
  projectId: "REACT_APP_SECRET_4",
  storageBucket: "REACT_APP_SECRET_5",
  messagingSenderId: "REACT_APP_SECRET_6",
  appId: "REACT_APP_SECRET_7",
  measurementId: "REACT_APP_SECRET_8"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));
serviceWorker.unregister();
