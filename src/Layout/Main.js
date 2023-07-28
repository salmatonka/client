import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';
import Header from '../Shares/Header/Header';
import NavBar from '../Shares/NavBar/NavBar';
import './Main.css';

const Main = () => {
    return (
        <>
          {/* <Header></Header> */}
          {/* <NavBar />
          <Outlet></Outlet>   */}
          {/* <Footer></Footer> */}

         
           
                <NavBar />
               
               
                <Outlet></Outlet> 
               
        


        </>
    );
};

export default Main;