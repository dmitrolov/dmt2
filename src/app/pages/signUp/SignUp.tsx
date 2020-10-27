import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { SignUpEmail } from '../../api/firebase';
import { setUserAction } from '../../redux/actions/userActions';
import { User } from '../../types/user';
import './SignUp.sass';

interface ISignUp {
  setUser: (user: User) => void;
}

const SignUp = (props: ISignUp) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusList, setStatus] = useState<string[]>([]);
  const history = useHistory();

  const validation = useCallback(() => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /\S+@\S+\.\S+/;
    const validationErrors: string[] = [];

    if (!re.test(String(email).toLowerCase())) validationErrors.push('The email address is badly formatted.');
    if (password.length < 6) validationErrors.push('Password should be at least 6 characters.');
    setStatus(validationErrors);
    console.log('[validationErrors]:', validationErrors);
  }, [email, password.length]);

  const onSubmit = () => {
    if (statusList.length === 0) SignUpEmail(email, password).then((firebaseResponse) => {
      if (firebaseResponse.message) setStatus([firebaseResponse.message]);
      if (firebaseResponse.user) {
        const currentUser: User = { email: firebaseResponse.user.email };
        setStatus(['User successfully created and signed in']);
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

  useEffect(() => {
    validation();
  }, [email, password, validation]);

  return (
    <div className='sign-up'>
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
})(SignUp);
