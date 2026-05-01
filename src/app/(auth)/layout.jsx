import React from 'react';
import Navbar from '../components/SharedPage/Navbar';

const AuthLayout = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   {children}
  </div>
 );
};

export default AuthLayout;