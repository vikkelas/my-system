import React from 'react';
import {Link} from "react-router-dom";
import style from './Authorization.module.sass'
import { useState } from 'react';
import {motion} from "framer-motion";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authSlice';

const Authorization = ({setContentType}) => {
    const dispatch = useDispatch();
    // работа формы
    const [inputValue, setInputValue]  = useState({
        password: '', 
        email: ''
    })
    const handleChangeInput = (e)=>{
        const {name, value} = e.target;
        setInputValue(prevent=>({...prevent, [name]:value}))
    }
    // отправка формы из redux
    const submitForm = (e)=>{
        e.preventDefault()
        dispatch(login({body: JSON.stringify(inputValue)}))
    }
    return (
        <motion.div
            initial={{x: -300}}
            animate={{x: 0}}
            exit={{x: -300}}
            key={"AuthorizationPage"}
            className={style.authorization}>
            <h1 className={style.authorizationTitle}>войти</h1>
            <form 
                onSubmit={submitForm}
                className={style.authorizationForm}>
                    <input
                        onChange={handleChangeInput}
                        value={inputValue.email}
                        className={style.authorizationFormInput}
                        required
                        name={'email'}
                        type="email"
                        placeholder={'email'}
                    />
                    <input
                        onChange={handleChangeInput}
                        value={inputValue.password}
                        className={style.authorizationFormInput}
                        type={"password"}
                        placeholder={'пароль'}
                        name={'password'}
                        required
                    />
                    <div className={style.authorizationFormBox}>
                        <button>Войти</button>
                        <span
                            onClick={()=>setContentType('resetPass')}
                        >забыли пароль?</span>
                    </div>
                    <span className={style.authorizationFormReg}>Еще не зарегистрированы? <Link to={'/registration'}>Зарегистрироваться.</Link></span>
                </form>
        </motion.div>
    );
};

export default Authorization;