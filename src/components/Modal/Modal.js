import React from 'react';
import style from './Modal.module.sass'

const Modal = ({children, modalStatus}) => {
    return (
        <div
            className={modalStatus?style.modalActive:style.modal}>
            <div
                onClick={(e)=>e.stopPropagation()}
                className={modalStatus?style.contentActive:style.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
