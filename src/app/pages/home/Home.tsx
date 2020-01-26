import React, { useState } from 'react';
import firebase from '../../api/firebase/firebase';
import './Home.sass';

export const Home = () => {
  const [userEmail, setUserEmail] = useState('');

  firebase.auth().onAuthStateChanged(() => {
    setUserEmail(firebase.auth().currentUser?.email || '');
  });

  return (
    <div className='home'>
      <h1>Current user - [{ userEmail }]</h1>
    </div>
  );
};
