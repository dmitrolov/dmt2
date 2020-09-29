import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { SignInEmail } from '../../api/firebase';
import './SignIn.sass';
import { setUserAction } from '../../redux/actions/userActions';
import { User } from '../../types/user/User';

interface ISignUp {
  setUser: (user: User) => void;
}

const SignIn = (props: ISignUp) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusList, setStatus] = useState<string[]>([]);
  const history = useHistory()

  const onSubmit = () => {
    if (statusList.length === 0) SignInEmail(email, password).then(firebaseResponse => {
      if (firebaseResponse.message) setStatus([firebaseResponse.message]);
      if (firebaseResponse.user) {
        const currentUser: User = { email: firebaseResponse.user.email };
        setStatus(['User successfully signed in']);
        props.setUser(currentUser);
        history.push('/')
      }
    });
  };

  const onEmailChange = (event: any) => {
    const email = event.target.value;
    setEmail(email);
  };

  const onPasswordChange = (event: any) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  return (
    <div className='sign-in'>
      <span>E-mail</span>
      <input value={ email } onChange={ onEmailChange } />
      <span>Password</span>
      <input type='password' value={ password } onChange={ onPasswordChange } />
      { statusList.map(error => <span>{ error }</span>) }
      <button onClick={ onSubmit }>Sign Up</button>
    </div>
  );
};

export default connect(null, {
  setUser: setUserAction
})(SignIn);
