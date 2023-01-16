import React from 'react';
import style from './ModalContent.module.sass'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {clearForm} from "../../redux/reducers/formAuthorizationSlice";
import {useNavigate} from "react-router-dom";
const ModalContent = ({content, setModal}) => {
    const navigate = useNavigate()
    const {title, message, link} = content
    const dispatch = useDispatch()
    const closeModal = ()=>{
        setModal(false)
        if(link!==''){
            navigate(link)
        }
        dispatch(clearForm())
    }
    return (
        <div className={style.modalError}>
            <h2 className={style.modalErrorTitle}>{title}</h2>
            <span className={style.modalErrorContent}>{message}</span>
            <button
                onClick={closeModal}
                className={style.modalErrorBtn}>Ok</button>
        </div>
    );
};
ModalContent.propTypes = {
    content: PropTypes.object,
    setModal: PropTypes.func,
};
export default ModalContent;