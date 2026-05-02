import Footer from '@/components/Footer/Footer';
import Header from '@/components/SharedPage/Header';
import Navbar from '@/components/SharedPage/Navbar';
import React from 'react';


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