import React from 'react';
import {motion} from "framer-motion";
import style from './ConfirmationEmailAndResetPassword.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {authentication, inputControl} from "../../redux/reducers/formAuthorizationSlice";
import PropTypes from "prop-types";
const ConfirmationEmailAndResetPassword = ({contentComponent, setContentType}) => {
    const {title, text, link} = contentComponent
    const dispatch = useDispatch()
    const {email} = useSelector(state => state.formAuthorization)
    const submitMessage = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        dispatch(authentication({body:form, optionsUrl:link}))
    }
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
                onSubmit={submitMessage}
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
                <button className={style.confirmationFormBtn}>отправить</button>
                <span
                    className={style.confirmationFormBack}
                    onClick={()=>setContentType('authorization')}
                >Назад</span>
            </form>
        </motion.div>
    );
};
ConfirmationEmailAndResetPassword.propTypes = {
    contentComponent: PropTypes.object,
    setContentType: PropTypes.func
}
export default ConfirmationEmailAndResetPassword;