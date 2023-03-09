import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,   Routes,
  Route, Navigate} from "react-router-dom";

import {persistor} from './store'
import store from './store'

import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import "./Scss/Custom.scss"
import HomePage from './Js/Pages/HomePage';
import SignIn from './Js/Pages/SignIn';
import ProfilUser from './Js/Pages/ProfilUser';
import NotFound from './Js/Pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/" >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profil" element={<ProfilUser/>} />
          <Route path="/404" element={<Navigate to={<NotFound/>}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
    </PersistGate>
  </Provider>

);
