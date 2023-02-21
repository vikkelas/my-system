import React from 'react';
import style from './Menu.module.sass';

const Menu = ({position}) => {
    return (
        <ul
            className={style.menu}
            style={position==='vertical'?{flexDirection:'column'}:{flexDirection:'row'}}>
            <li>Главная</li>
            <li>Чат</li>
            <li>Настройка</li>
        </ul>
    );
};

export default Menu;