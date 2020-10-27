import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import firebase from '../../api/firebase';
import './Home.sass';
import { setUserAction } from '../../redux/actions/userActions';
import { User } from '../../types/user';

interface Home {
  userData: User,
  setUser: (user: User) => void
}

export const Home = (props: Home) => {
  const { setUser } = props;
  const [userEmail, setUserEmail] = useState('');
  const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;

  useEffect(() => {
    setUser({ email: userEmail });
  }, [setUser, userEmail]);

  firebase.auth().onAuthStateChanged(() => {
    setUserEmail(firebase.auth().currentUser?.email || '');
  });

  return (
    <div className='home'>
      <h1>Current user - [{userEmail}]</h1>
      <button onClick={() => alert(props.userData.email)}>Alert user data email from store</button>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      <button onClick={() => alert(bodyWidth)}>Show client width</button>
      <button onClick={() => alert(bodyHeight)}>Show client height</button>
    </div>
  );
};

export default connect((state: AppState) => ({
  userData: state.userData
}), {
  setUser: setUserAction
})(Home)
