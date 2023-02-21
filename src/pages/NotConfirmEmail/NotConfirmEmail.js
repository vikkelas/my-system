import React from "react";
import logo from "../../images/logo.png";
import style from './NotConfirmEmail.module.sass';
import image from '../../images/technical.png';
import { useNavigate } from "react-router-dom";

const NotConfirmEmail = ()=>{
    const navigate = useNavigate();
    return(
        <article className={style.bodyPage}>
            <header className={style.header}>
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </header>
            <main className={style.main}> 
                <div className={style.mainDecor}>
                    <img src={image} alt={"техническая поддержка"}/>
                </div>
                <div className={style.mainContainer}>
                    <div className={style.mainContainerBox}>
                        <h2>Ссылка просрочена</h2>
                        <p>Запросите повторную отправку письма для подтверждения Вашего email-адреса</p>
                    </div>
                    <button
                        onClick={()=>navigate('/')}
                    >ok</button>
                </div>                
            </main>
        </article>
    );
}

export default NotConfirmEmail;