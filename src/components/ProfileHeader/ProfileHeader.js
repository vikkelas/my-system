import React from 'react';
import style from "./ProfileHeader.module.sass";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileHeader = () => {
    const { user } = useSelector(state=>state.auth)
    return (
        <Link to={'/home'} className={style.HeaderProfile}>
            <div className={style.HeaderProfileImg}>
                <img src={process.env.REACT_APP_SERVER_URL + '/user/avatars/frame2.jpg'} alt=""/>
            </div>
            <h3>{user.userName}</h3>
        </Link>
    );
};

export default ProfileHeader;