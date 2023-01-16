import React from 'react';
import {Link} from "react-router-dom";
import style from './Authorization.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {authentication, inputControl} from "../../redux/reducers/formAuthorizationSlice";
import {motion} from "framer-motion";

const Authorization = ({setContentType}) => {
    const {password, login} = useSelector(state => state.formAuthorization)
    const dispatch=useDispatch()
    const handleChangeInput = (e)=>{
        const {name, value} = e.target;
        dispatch(inputControl({name, value}));
    }
    const submitForm = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(authentication({body: formData, optionsUrl: '/local'}))
    }
    return (
        <motion.div
            initial={{x: -300}}
            animate={{x: 0}}
            exit={{x: -300}}
            key={"AuthorizationPage"}
            className={style.authorization}>
            <h1 className={style.authorizationTitle}>войти</h1>
            <form onSubmit={submitForm} className={style.authorizationForm}>
                    <input
                        onChange={handleChangeInput}
                        value={login}
                        className={style.authorizationFormInput}
                        required
                        name={'identifier'}
                        type="email"
                        placeholder={'email'}
                    />
                    <input
                        onChange={handleChangeInput}
                        value={password}
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