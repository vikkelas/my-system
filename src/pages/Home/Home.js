import React from 'react';
import style from './Home.module.sass'
import HomeFirst from "../../components/HomeFirst/HomeFirst";

const Home = () => {

    return (
        <div className={style.home}>
            <HomeFirst/>
        </div>
    );
};

export default Home;