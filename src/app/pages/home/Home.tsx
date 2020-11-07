import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import './Home.sass';
import { setUserAction } from '../../redux/actions/userActions';
import { PlayerAccount } from '../../types/general';

interface Home {
  userData: PlayerAccount,
  setUser: (user: PlayerAccount) => void
}

export const Home = (props: Home) => {
  const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;


  return (
    <div className='home'>
      <button onClick={() => alert(props.userData.email)}>Alert user data email from store</button>
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
