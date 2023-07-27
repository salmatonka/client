import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';
import Header from '../Shares/Header/Header';
import NavBar from '../Shares/NavBar/NavBar';

const Main = () => {
    return (
        <>
          {/* <Header></Header> */}
          <NavBar />
          <Outlet></Outlet>  
          {/* <Footer></Footer> */}
        </>
    );
};

export default Main;