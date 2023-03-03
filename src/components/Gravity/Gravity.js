import React from "react";
import {motion} from "framer-motion";
import style from './Gravity.module.sass';
import girlStick from '../../images/girlStick.png'
import GravityImg1 from '../../images/GravityImg1.png';
import GravityImg2 from '../../images/GravityImg2.png';
import GravityImg3 from '../../images/GravityImg3.png';
import GravityImgArrow1 from '../../images/GravityImgArrow1.png';
import GravityImgArrow2 from '../../images/GravityImgArrow2.png';
import GravityImgArrow3 from '../../images/GravityImgArrow3.png';


const Gravity = () => {
    const arraySpecialists = ['Бухгалтер', 'IT-специалист', 'Юрист']
    const listVariants = {
        visible: i =>({
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                delay: i*0.5,
            }
        }),
        hidden: {
            x: -200,
            rotate: 180,
            opacity: 0
        }
    }

    return (
        <div className={style.main}>
            <div className={style.mainWhiteBox}>
                <div className={style.mainWhiteBoxLeft}>
                    <div className={style.mainWhiteBoxLeftText}>
                        <h1>люди, которые могут быть вам полезны</h1>
                        <p>выберите специалиста по нужному вам направлению, и он сможет помочь решить поставленную задачу</p>
                    </div>
                    <div className={style.mainWhiteBoxLeftBtnBox}>
                        {arraySpecialists.map((item, index)=>{
                            return (
                                <motion.div
                                    variants={listVariants}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    custom={index}
                                    key={index}
                                    className={style.mainWhiteBoxLeftBtnBoxElement}
                                >
                                    {item}
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
                <div className={style.mainWhiteBoxGirl}>
                    <img src={girlStick} alt=""/>
                </div>
            </div>
            <div className={style.mainBlackBox}>
                <h1>мы создали эту платформу, чтобы вы не тратили время на поиски помощников на просторах всего интернета.</h1>
                <div>
                    <div>
                        <div>
                            <img src={GravityImgArrow1} alt=""/>
                        </div>
                        <div>
                            <img src={GravityImg1} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={GravityImgArrow2} alt=""/>
                        </div>
                        <div>
                            <img src={GravityImg2} alt=""/>
                        </div>
                    </div>
                    <p>профессиональная обратная связь 24/7</p>
                    <p>интуитивный и простой дизайн платформы</p>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={GravityImg3} alt=""/>
                        </div>
                        <div>
                            <img src={GravityImgArrow3} alt=""/>
                        </div>
                    </div>
                    <p>экспертная поддержка юристов, бухгалтеров и IT специалистов</p>
                </div>
            </div>



        </div>
    );
};
export default Gravity;

