import React from 'react';
import style from './Home.module.sass'
import HomeFirst from "../../components/HomeFirst/HomeFirst";
import Gravity from "../../components/Gravity/Gravity";

const Home = () => {

    return (
        <div className={style.home}>
            {/*<HomeFirst/>*/}
            <Gravity/>
        </div>
    );
};

export default Home;
