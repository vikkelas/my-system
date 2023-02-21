import React from 'react';
import style from './HomeFirst.module.sass';
import manHome from "../../images/manHome.png";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import seatGirl from '../../images/seatGirl.png'

const HomeFirst = () => {
    const { user } = useSelector(state=>state.auth);
    return (
        <div className={style.homeFirst}>
            <div className={style.homeFirstContainer}>
                <div className={style.homeFirstContainerHello}>
                    <h1>Здравствуйте, {user.userName}</h1>
                    <p>У вас пока нет помощников</p>
                    <button>Найти помощника</button>
                </div>
                <div className={style.homeFirstContainerImg}>
                    <img src={manHome} alt="Найти помощника"/>
                </div>
            </div>
            <div className={style.homeFirstMain}>
                <motion.div
                    animate={{scale: 1.2}}
                    transition={{duration: 1, repeatType: 'reverse', repeat: Infinity}}
                    className={style.homeFirstMainImg}>
                    <svg width="55" height="114" viewBox="0 0 55 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.7979 102.642L31.2868 102.921L31.2868 102.921L27.7979 102.642ZM24.564 112.048C25.8177 113.519 28.0267 113.696 29.498 112.442L53.4745 92.0123C54.9458 90.7586 55.1222 88.5496 53.8685 87.0782C52.6148 85.6069 50.4058 85.4305 48.9345 86.6842L27.6221 104.844L9.46219 83.5317C8.2085 82.0604 5.99946 81.884 4.52815 83.1377C3.05683 84.3913 2.88041 86.6004 4.13409 88.0717L24.564 112.048ZM24.3091 102.364L23.7391 109.499L30.7169 110.057L31.2868 102.921L24.3091 102.364ZM0.0405874 3.88288C18.557 33.2259 27.0713 67.7769 24.3091 102.364L31.2868 102.921C34.1695 66.8265 25.284 30.7694 5.96047 0.147243L0.0405874 3.88288Z" fill="#AF05FF"/>
                    </svg>
                </motion.div>
                <div className={style.homeFirstMainBox}>
                    <h2>как это работает</h2>
                    <div className={style.homeFirstMainBoxText}>
                        <p>мы хорошо представляем проблемы, возникающие в работе самозанятого бухгалтера.</p>
                        <p>это масса возникающих у вас и вашего клиента вопросов мало связанных, или совсем не связанных с бухгалтерией.</p>
                        <p>это вопросы юридического, организационного, технического плана и многие другие.</p>
                        <p>их приходится решать самим, затрачивая на это время или расписываться в собственном бессилии. твоя система готова помочь вам в решении сложных вопросов.</p>
                        <p>нажмите кнопку «найти» и получите поддержку того специалиста, который нужен вам именно сейчас.</p>
                    </div>
                </div>
            </div>
            <div className={style.homeFirstWhite}>
                <div className={style.homeFirstWhiteBlack}>
                    <div className={style.homeFirstWhiteBlackContainer}>
                        <div className={style.homeFirstWhiteBlackContainerImg}>
                            <img src={seatGirl} alt="Твоя система - найдите себе специалиста"/>
                        </div>
                        <div className={style.homeFirstWhiteBlackContainerInfo}>
                            <h2>находите себе в команду специалистов и решайте сложные вопросы вместе</h2>
                            <button>найти помощника</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomeFirst;