import React, { useState } from 'react';
import { SignInEmail } from '../../api/firebase/firebase';
import './SignIn.sass';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusList, setStatus] = useState<string[]>([]);

  const onSubmit = () => {
    if (statusList.length === 0) SignInEmail(email, password).then(firebaseResponse => {
      if (firebaseResponse.message) setStatus([firebaseResponse.message]);
      if (firebaseResponse.user) {
        setStatus(['User successfully signed in']);
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
