import React from 'react';

import Header from '../../shared-components/header';
import LoginForm from './login-form';

const LoginPage = () => {

  const navItems = [

  ];

  return (
    <React.Fragment>
      <Header navItems = { navItems }/>
      <LoginForm />
    </React.Fragment>
  );
}
export default LoginPage;
