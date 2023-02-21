import React, {useCallback, useEffect, useState} from 'react';
import style from './RegPage.module.sass'
import it from '../../images/undraw_programming_re_kg9v.png'
import Registration from "../../components/Registration/Registration";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const RegPage = () => {
    const navigate = useNavigate()
    const successRegText = 'Для окончания регистрации Вам на почту отправлено письмо с подтверждением вашего email адреса.'
    const {loading,error} =useSelector(state => state.formAuthorization)
    const {user} = useSelector(state=>state.auth)
    const [modalStatus, setModalStatus] = useState(false)
    const [modalInfo, setModalInfo] = useState({
        title: '',
        message: '',
        link: ''
    })
    const openModal = useCallback(()=>{
       if(loading==='rejected'|| loading==='fulfilled'){
           setModalStatus(true)
           switch (loading){
               case 'rejected':
                   setModalInfo({
                       title: 'Ошибка',
                       message: error,
                       link: ''
                   })
                   break
               case 'fulfilled':
                   setModalInfo({
                       title: 'Осталось совсем немного',
                       message: successRegText,
                       link: '/authorization'
                   })
                   break
               default: setModalInfo({
                   title: '',
                   message: '',
                   link: ''
               });
           }
       }
    },[loading,error])

    useEffect(()=>{
        if(user){
            navigate('/home')
        }
        openModal()
    },[openModal,user, navigate])
    return (
        <div className={style.home}>
            <div className={style.homeDecor}>
                <div className={style.homeDecorImgBox}>
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        src={it} alt="it, programmer"/>
                </div>
            </div>
            <motion.main
                initial={{x: 677, opacity: 0.3}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
                className={style.homeMain}>
                <Registration/>
            </motion.main>
            <Modal modalStatus={modalStatus}>
                <ModalContent setModal={setModalStatus} content={modalInfo}/>
            </Modal>
        </div>
    );
};

export default RegPage;