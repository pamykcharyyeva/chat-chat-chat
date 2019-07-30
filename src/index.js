import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

// api key from firebase
firebase.initializeApp({
    apiKey: "AIzaSyAXKg4pVyZO8bF12KQ2EgC07Tq6Qa-_AhQ",
    authDomain: "flatiron-chat-2363c.firebaseapp.com",
    databaseURL: "https://flatiron-chat-2363c.firebaseio.com",
    projectId: "flatiron-chat-2363c",
    storageBucket: "flatiron-chat-2363c.appspot.com",
    messagingSenderId: "758003123033",
    appId: "1:758003123033:web:6da136e8b021963a"
})

const routing = (
    <Router>
      <div id='routing-container'>
        <Route path='/login' component={LoginComponent}></Route>
        <Route path='/signup' component={SignupComponent}></Route>
        <Route path='/dashboard' component={DashboardComponent}></Route>
      </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
