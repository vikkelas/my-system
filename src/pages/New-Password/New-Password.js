import React, { useCallback, useEffect, useState } from "react";
import imgPassword from '../../images/password.png'
import style from './New-Password.module.sass'
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { resetStatusLoad } from '../../redux/reducers/authSlice';

const NewPassword = () => {
    // получение токена из параметров
    const [searchParams] = useSearchParams ()
    const token = searchParams.get('token');
    
    // вывод ошибки
    const errMsg = {
        MINPASS: 'Пароль должен быть миниму 8 символов и иметь одну заглавную букву',
        CONFIRM: 'Пароли не совпадают'
    }
    const [error, setError] = useState('');

    // состояние контента
    const [modalActive, setModalActive] = useState({
        status: false,
        message: ''
    })

    // обработка инпута
    const [input, setInput] = useState({
        password: '',
        confirm: '',
    })
    const handleChangeInput = (e) => {
        const {value, name} = e.target
        setInput(prevstate=> ({...prevstate, [name]: value}))
    }

    // обнуление ошибки
    const clearError = () => {
        setTimeout(()=>{
            setError('')
        }, 2000)
    }

    // Действие при нажатии на "ок" (обнуление и редирект)
    const dispatch = useDispatch()
    const handleOkClick = () => {
        navigate('/authorization')
        dispatch(resetStatusLoad())
    }
    //Отправка запроса на смену пароля 
    const sendRequestChangePassword = async (e) => {
        e.preventDefault()
        const validPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}/g.test(input.password);
        if(!validPassword)setError(errMsg.MINPASS)
        if(validPassword&&input.confirm!==input.password)setError(errMsg.CONFIRM)
        clearError()
        if(validPassword&&input.confirm===input.password){
            try{
                const response = await fetch(process.env.REACT_APP_SERVER_URL+'/auth/new-password',{
                    body: JSON.stringify({ password: input.password }),
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                })
                const data = await response.json()
                if(!data.ok){
                    new Error('Просроченная ссылка')
                }
                setModalActive({
                    status: true,
                    message: data.message,
                })
            }catch(err){
                // отправка информации в окно оповещения
                setModalActive({
                    status: true,
                    message: err.message,
                })
            }
        }
    }
    //при условии отсутствия токена перенаправить на авторизацию
    const navigate = useNavigate();
    const redirect = useCallback(()=> {
        navigate('/authorization')
    },[navigate]) 

    useEffect(()=>{
        if(!token)redirect()
    },[token, redirect])

    return (
        <main className={style.main}>
            <div className={style.mainFormBox}>
                <div className={style.mainFormBoxImg}>
                    <img src={imgPassword} alt="forgot password" />
                </div>
                <AnimatePresence>
                    {!modalActive.status&&
                    <motion.form 
                        key="modal"
                        initial={{
                            scale: 0.2, 
                            translate: "-50%, -50%",
                            opacity: 0.1
                        }}
                        animate={{
                            scale: 1, 
                            translate: "-50%, -50%",
                            opacity: 1
                        }}
                        exit={{
                            scale: 1.4, 
                            translate: "-50%, -50%",
                            opacity: 0.3
                        }}
                        transition={{duration: 0.6}}
                        className={style.mainFormBoxForm}>
                        <h2 className={style.mainFormBoxFormTitle}>Смена пароля</h2>
                        <label className={style.mainFormBoxFormLabel}>
                            <span>Новый пароль</span>
                            <input 
                                name="password" 
                                type="password" 
                                value={input.password}
                                onChange={handleChangeInput}
                            />  
                        </label>
                        <label className={style.mainFormBoxFormLabel}>
                            <span>Повторите</span>
                            <input 
                                name="confirm" 
                                type="password" 
                                value={input.confirm}
                                onChange={handleChangeInput}
                            />  
                            {error!==''&&<span className={style.mainFormBoxFormLabelError}>{error}</span>}
                        </label>
                        <button
                            onClick={sendRequestChangePassword}
                        >Сменить</button>                   
                    </motion.form>}
                </AnimatePresence>
                <AnimatePresence>
                {modalActive.status&&
                    <motion.div 
                        key="modal"
                        className={style.mainFormBoxSuccess}
                        initial={{
                            scale: 0.2, 
                            opacity: 0.1,
                            translate: "-50%",
                        }}
                        animate={{
                            scale: 1, 
                            opacity: 1,
                            translate: "-50%",
                        }}
                        exit={{
                            scale: 1.4, 
                            opacity: 0.3,
                            translate: "-50%",
                        }}
                        transition={{duration: 0.6}}
                    >
                        <h2>{modalActive.message}</h2>
                        <button
                            onClick={handleOkClick}
                        >Ок</button>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </main>
    )
}

export default NewPassword;