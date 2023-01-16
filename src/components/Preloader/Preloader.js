import React from 'react';
import style from './Preloader.module.sass'
import preloader from '../../images/Eclipse-0.8s-223px.gif'
const Preloader = () => {
    return (
       <div className={style.preloader}>
           <img src={preloader} alt="preloader"/>
       </div>
    );
};

export default Preloader;