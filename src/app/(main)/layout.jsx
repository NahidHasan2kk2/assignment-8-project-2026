import React from 'react';
import Navbar from '../components/SharedPage/Navbar';
import Header from '../components/SharedPage/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   <Header></Header>
   {children}
   <Footer></Footer>
  </div>
 );
};

export default MainLayout;