import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from './Layout.module.sass';

const Layout = () => {
    return (
        <div className={style.layout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
};

export default Layout;