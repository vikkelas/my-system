import React, {useCallback, useEffect, useState} from 'react';
import style from './AuthorizationPage.module.sass'
import manOne from '../../images/cardMan.png'
import manTwo from '../../images/cardMan2.png'
import cardGirl from '../../images/girlCard.png'
import logo from '../../images/logo.png'
import {AnimatePresence, motion} from "framer-motion";
import Authorization from "../../components/Authorization/Authorization";
import ModalContent from "../../components/ModalContent/ModalContent";
import Modal from "../../components/Modal/Modal";
import {useSelector} from "react-redux";
import ConfirmationEmailAndResetPassword from '../../components/ConfirmationEmailAndResetPassword/ConfirmationEmailAndResetPassword'
import Preloader from "../../components/Preloader/Preloader";
import {useNavigate} from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const AuthorizationPage = () => {
    //получение Query параметров
    const query = useQuery()

    const {loading, error, successEmail, user} =useSelector(state => state.formAuthorization)
    //Статус модального окна
    const [modalStatus, setModalStatus] = useState(false);
    //Контент для передачи в модальное окно
    const [modalInfo, setModalInfo] = useState({
        title: '',
        message: '',
        link: ''
    })
    //Тип отображаемого компонента на странице
    const [contentType, setContentType] = useState('authorization')
    //Контент для передачи в компонент с восстановлением пароля и подтверждением почты
    const contentComponent = {
        confirmation: {
            title: 'подтверждение почты',
            text: 'Введите свой Email который вы указали при регистрации, на него будет повторно отправлена ссылка для подтверждения',
            link: '/send-email-confirmation'
        },
        resetPass: {
            title: 'восстановление пароля',
            text: 'Введите свой Email который вы указали при регистрации, на него будет отправлена ссылка для сброса пароля',
            link: '/forgot-password'
        }
    }
   const navigate = useNavigate()
    const openModalAreRedirect = useCallback(()=>{
        if(loading==='fulfilled'){
            successEmail && navigate('/success-email')
            user&& navigate('/home')
        }
        if(query.has("successEmail")&&loading!=='fulfilled'){
            setModalStatus(true)
            setModalInfo({
                title: 'Поздравляем',
                message: 'Ваш адрес электронной почты подтвержден',
                link: ''
            })
        }
        if(loading==='rejected'){
            if(error==='Вы не подтвердили свой email'){
                setContentType('confirmation')
            }
            setModalStatus(true)
            setModalInfo({
                title: 'Ошибка',
                message: error,
                link: ''
            })
        }
    },[query,navigate, successEmail, user,loading,error])
    useEffect(()=>{
        openModalAreRedirect()
    },[openModalAreRedirect])
    return (
        <div className={style.autoPage}>
            <div className={style.autoPageMain}>
                <div className={style.autoPageMainImg}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.autoPageMainContainer}>
                    <AnimatePresence>
                        {contentType==='authorization'&&<Authorization setContentType={setContentType}/>}
                        {(contentType==='confirmation'||contentType==='resetPass')&&<ConfirmationEmailAndResetPassword
                            setContentType = {setContentType}
                            contentComponent={contentComponent[contentType]}/>}
                    </AnimatePresence>
                </div>
            </div>
            <div className={style.autoPageDecor}>
                <div className={style.autoPageDecorBoxImg}>
                    <motion.img
                        initial={{opacity: 0, y: -300}}
                        animate={{opacity: 1, y:0}}
                        transition={{delay: 0.2}}
                        className={style.autoPageDecorBoxImgOne} src={manOne} alt="card man"/>
                    <motion.img
                        initial={{opacity: 0, y:400}}
                        animate={{opacity: 1, y:50}}
                        transition={{delay: 0.5}}
                        className={style.autoPageDecorBoxImgTwo} src={cardGirl} alt="card girl"/>
                    <motion.img
                        initial={{opacity: 0, y:-350}}
                        animate={{opacity: 1, y:0}}
                        transition={{delay: 0.3}}
                        className={style.autoPageDecorBoxImgThree} src={manTwo} alt="card man two"/>
                </div>
            </div>
            {loading==='pending'&&<Preloader/>}
            <Modal modalStatus={modalStatus}>
                <ModalContent setModal={setModalStatus} content={modalInfo}/>
            </Modal>
        </div>
    );
};

export default AuthorizationPage;