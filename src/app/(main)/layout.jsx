import Footer from '@/components/Footer/Footer';
import SummerTipsSection from '@/components/HomePage/SummerTipSection/SummerTipsSection';
import Header from '@/components/SharedPage/Header';
import Navbar from '@/components/SharedPage/Navbar';
import React from 'react';


const MainLayout = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   <Header></Header>
   {children}
   <SummerTipsSection></SummerTipsSection>
   <Footer></Footer>
  </div>
 );
};

export default MainLayout;