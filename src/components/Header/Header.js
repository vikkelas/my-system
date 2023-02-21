import React from 'react';
import style from './Header.module.sass';
import logo from '../../images/logo.png';
import {useDispatch} from "react-redux";
import {logout} from "../../redux/reducers/authSlice";
import Menu from "../Menu/Menu";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const Header = () => {
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} alt=""/>
            </div>
            <Menu position={''}/>
            <div className={style.headerProfile}>
                <ProfileHeader/>
                <span
                    onClick={logoutUser}
                    className={style.headerProfileLogout}
                >
                    выйти
                </span>
            </div>
        </header>
    );
};

export default Header;