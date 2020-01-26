import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import firebase from '../../api/firebase/firebase';
import './Home.sass';
import { setUserAction } from '../../redux/actions/userActions';
import { User } from '../../types/user/User';

interface Home {
  userData: User,
  setUser: (user: User) => void
}

export const Home = (props: Home) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    props.setUser({email: userEmail});
  }, [userEmail]);

  firebase.auth().onAuthStateChanged(() => {
    setUserEmail(firebase.auth().currentUser?.email || '');
  });

  return (
    <div className='home'>
      <h1>Current user - [{ userEmail }]</h1>
      <button onClick={() => alert(props.userData.email)}>Alert user data email from store</button>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default connect((state: AppState) => ({
  userData: state.userData
}), {
  setUser: setUserAction
})(Home)
