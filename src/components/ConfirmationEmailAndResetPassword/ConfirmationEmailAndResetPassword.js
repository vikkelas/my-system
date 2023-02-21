import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import style from './ConfirmationEmailAndResetPassword.module.sass'
import {useDispatch, useSelector} from "react-redux";
import { inputControl} from "../../redux/reducers/formAuthorizationSlice";
import {newConfirmArePassword} from "../../redux/reducers/authSlice"
const ConfirmationEmailAndResetPassword = ({
    contentComponent, 
    setContentType,
    setModalStatus,
    setModalInfo
    }) => {
    const {title, text, link} = contentComponent
    const dispatch = useDispatch()
    const {email} = useSelector(state => state.formAuthorization)
    const {statusConfirmAndPassword, messageServer, error} = useSelector(state=>state.auth)
   

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(newConfirmArePassword({
            body: JSON.stringify({email}),
            url: link
        }))
    }

    useEffect(()=>{
        if(statusConfirmAndPassword==='fulfilled'){
            setModalStatus(true)
            setModalInfo({
                title: 'Письмо отправлено',
                message: messageServer,
                link: '/',
            })
        }
        if(statusConfirmAndPassword==='rejected'){
            setModalStatus(true)
            setModalInfo({
                title: 'Ошибка',
                message: error,
                link: '',
            })
        }
    }, [statusConfirmAndPassword,error, messageServer, setModalStatus,setModalInfo ])
    return (
        <motion.div
            initial={{x: -300}}
            animate={{x: 0}}
            exit={{x: -300}}
            className={style.confirmation}
            key={"AuthorizationPage"}
        >
            <h1 className={style.confirmationTitle}>{title}</h1>
            <p className={style.confirmationText}>{text}</p>
            <form
                onSubmit={handleSubmit}
                className={style.confirmationForm}>
                <input
                    onChange={(e)=>{
                        const {name,value} = e.target;
                       dispatch(inputControl({name, value}))
                    }}
                    value={email}
                    className={style.confirmationFormInput}
                    type="email"
                    name={'email'}
                    placeholder={'email при регистрации'}
                />
                <button 
                    onClick={handleSubmit}
                    className={style.confirmationFormBtn}>
                        отправить
                </button>
                <span
                    className={style.confirmationFormBack}
                    onClick={()=>setContentType('authorization')}
                >Назад</span>
            </form>
        </motion.div>
    );
};

export default ConfirmationEmailAndResetPassword;