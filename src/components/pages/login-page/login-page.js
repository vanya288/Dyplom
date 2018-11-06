import React from 'react';

import Header from '../../shared-components/header';

const LoginPage = () => {

  const navItems = [
    {label: 'Home'},
    {label: 'Registration'}
  ];

  return (
    <Header navItems = { navItems }/>
  );
}
export default LoginPage;
