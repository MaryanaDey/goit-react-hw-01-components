import React from 'react';
import PropTypes from 'prop-types';

import s from './Friend.module.css';

export default function Friends({ isOnline, avatar, name }) {
    return (
       <li className={s.item}>
        <span className={isOnline ? s.statusOn : s.statusOff}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
       </li>
    );
}

Friends.propTypes = {
    isOnline: PropTypes.bool,
    avatar:PropTypes.string,
    name: PropTypes.string,
}