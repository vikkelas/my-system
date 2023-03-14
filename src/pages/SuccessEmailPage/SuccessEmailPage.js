import React, { useEffect } from 'react';
import style from './SuccessEmailPage.module.sass'
import decorGirl from '../../images/girlHandsUp.png'
import {Navigate, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/authSlice';

const SuccessEmailPage = () => {
    const navigate = useNavigate()
    const {statusLoad} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.login)dispatch(login({body: localStorage.login}))
            navigate('/authorization')
        },1500)

    },[dispatch, navigate])
    if(statusLoad==='fulfilled'){
        return <Navigate to={'/home'} replace/>;
    }
    if(statusLoad==='rejected'){
        return <Navigate to={'/authorization'} replace/>;
    }
    if(statusLoad==='idle'||statusLoad==='pending'){
        return (
            <div className={style.successPage}>
            <div className={style.successPageDecorGirl}>
                <img src={decorGirl} alt="girl hand up"/>
            </div>
            <div className={style.successPageBoxInfo}>
                <div>
                    <svg width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80.8062 160.918C124.989 160.918 160.806 125.101 160.806 80.918C160.806 36.7352 124.989 0.917969 80.8062 0.917969C36.6234 0.917969 0.806152 36.7352 0.806152 80.918C0.806152 125.101 36.6234 160.918 80.8062 160.918Z" fill="#AF05FF"/>
                        <path d="M119.806 55.5226V106.313C119.806 106.79 119.713 107.262 119.53 107.702C119.348 108.142 119.081 108.542 118.744 108.879C118.407 109.216 118.007 109.483 117.567 109.665C117.127 109.848 116.655 109.941 116.178 109.941H45.4341C44.9576 109.941 44.4858 109.848 44.0456 109.665C43.6054 109.483 43.2054 109.216 42.8685 108.879C42.5316 108.542 42.2644 108.142 42.0821 107.702C41.8998 107.262 41.8061 106.79 41.8062 106.313V55.5226C41.8039 55.1075 41.8777 54.6956 42.024 54.3072C42.2409 53.6874 42.6236 53.1389 43.1305 52.7216C43.6375 52.3042 44.2491 52.0339 44.899 51.94C45.0759 51.911 45.2548 51.8959 45.4341 51.8947H116.178C116.358 51.8959 116.536 51.911 116.713 51.94C117.363 52.0338 117.975 52.3041 118.482 52.7215C118.989 53.1389 119.371 53.6874 119.588 54.3072C119.735 54.6956 119.808 55.1075 119.806 55.5226Z" fill="white"/>
                        <path d="M119.588 54.3073L81.8853 82.3691C81.5747 82.6045 81.1957 82.7319 80.806 82.7319C80.4163 82.7319 80.0373 82.6045 79.7267 82.3691L42.0239 54.3073C42.2408 53.6875 42.6235 53.139 43.1304 52.7216C43.6373 52.3043 44.249 52.0339 44.8989 51.9401L80.8061 78.6596L116.713 51.9401C117.363 52.0338 117.975 52.3041 118.482 52.7215C118.989 53.1389 119.371 53.6874 119.588 54.3073Z" fill="#AF05FF"/>
                    </svg>
                </div>
                <div className={style.successPageBoxInfoText}>
                    <h1 className={style.successPageBoxInfoTextTitle}>Email успешно подтвержден</h1>
                </div>
            </div>
        </div>
        )
    }
};

export default SuccessEmailPage;
