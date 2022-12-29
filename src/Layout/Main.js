import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';
import Header from '../Shares/Header/Header';

const Main = () => {
    return (
        <>
          <Header></Header>
          <Outlet></Outlet>  
          <Footer></Footer>
        </>
    );
};

export default Main;