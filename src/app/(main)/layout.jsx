import React from 'react';
import Navbar from '../components/SharedPage/Navbar';
import Header from '../components/SharedPage/Header';

const MainLayout = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   <Header></Header>
   {children}
  </div>
 );
};

export default MainLayout;