import React, { useEffect, useState } from 'react';
import { SignUpEmail } from '../../api/firebase/firebase';
import './SignUp.sass';

interface SignUpState {
  email: string;
  password: string;
}

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusList, setStatus] = useState<string[]>([]);

  const validation = () => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /\S+@\S+\.\S+/;
    const validationErrors: string[] = [];

    if (!re.test(String(email).toLowerCase())) validationErrors.push('The email address is badly formatted.');
    if (password.length < 6) validationErrors.push('Password should be at least 6 characters.');
    setStatus(validationErrors);
    console.log('[validationErrors]:', validationErrors);
  };

  const onSubmit = () => {
    if (statusList.length === 0) SignUpEmail(email, password).then(firebaseResponce => {
      if (firebaseResponce.message) setStatus([firebaseResponce.message]);
      if (firebaseResponce.user) {
        setStatus(['User successfully created and signed in'])
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
  }, [email, password]);

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
