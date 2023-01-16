import React, {useState} from 'react';
import {Link} from "react-router-dom";
import style from './Registration.module.sass';
import {useDispatch, useSelector} from "react-redux";
import {inputControl, authentication,} from "../../redux/reducers/formAuthorizationSlice";
import {motion} from "framer-motion";

const Registration = () => {
    const dispatch = useDispatch()
    const {username,password,email, confirmation, permission} = useSelector(state => state.formAuthorization)
    const [passwordValid, setPasswordValid] = useState({
        password: true,
        permission: true
    })
    const handleChangeInput = (e)=>{
        const {name, value} = e.target;
        switch (name){
            case ('permission'):
                dispatch(inputControl({name, value: e.target.checked}));
                break
            default:
                dispatch(inputControl({name, value}));
        }
    }
    const submitForm = (e)=>{
        e.preventDefault()
        const validPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}/g.test(password);
        setPasswordValid(prevState => ({...prevState, password: validPassword}))
        const checkPermission = password===confirmation;
        setPasswordValid(prevState => ({...prevState, permission: checkPermission}))
        const formData = new FormData()
        formData.append("username",username);
        formData.append("password",password);
        formData.append("email",email);
        validPassword&&checkPermission&&dispatch(authentication({body:formData, optionsUrl: '/local/register'}))
    }
    return (
        <div className={style.registration}>
            <h2 className={style.registrationTitle}>регистрация</h2>
            <span className={style.registrationLogin}>уже есть аккаунт? <Link to={'/authorization'}>войти</Link></span>
            <form
                onSubmit={submitForm}
                className={style.registrationForm}>
                <input
                    value={username}
                    onChange={handleChangeInput}
                    required
                    className={style.registrationFormInput}
                    type="text"
                    name={'username'}
                    placeholder={'ваше имя'}/>
                <input
                    value={email}
                    onChange={handleChangeInput}
                    required
                    className={style.registrationFormInput}
                    type="email"
                    name={'email'}
                    placeholder={'ваш email'}/>
                <label className={style.registrationFormLabel}>
                    <motion.input
                        value={password}
                        onChange={handleChangeInput}
                        minLength={2}
                        required
                        className={style.registrationFormInput}
                        type="password"
                        name={'password'}
                        placeholder={'пароль'}/>
                    <motion.span
                        animate={passwordValid.password?{opacity:0}:{opacity:1}}
                        className={style.registrationFormLabelError}>пароль должен содержать минимум одну строчную и одну заглавную буквы и цифру, быть не короче 8 символов</motion.span>
                </label>
                <label className={style.registrationFormLabel}>
                    <motion.input
                        value={confirmation}
                        onChange={handleChangeInput}
                        required
                        minLength={2}
                        className={style.registrationFormInput}
                        type="password"
                        name={'confirmation'}
                        placeholder={'повторите пароль'}/>
                    <motion.span
                        animate={passwordValid.permission?{opacity:0}:{opacity:1}}
                        className={style.registrationFormLabelError}>пароли должны совпадать</motion.span>
                </label>
                <label className={style.registrationFormGroup}>
                    <input
                        required
                        onChange={handleChangeInput}
                        checked={permission}
                        className={style.registrationFormGroupCheckBox}
                        type="checkbox"
                        name={'permission'}/>
                    <span className={style.registrationFormGroupText}>Согласие на обработку персональных данных</span>
                </label>
                <button className={style.registrationFormBtn}>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registration;