import React from 'react';
import PropTypes from 'prop-types';

export default function Friends({ isOnline, avatar, name }) {
    return (
       <li >
        <span > {isOnline === true ? "online" : "offline" }</span>
        <img  src={avatar} alt={name} width="48" />
        <p >{name}</p>
</li>
    );
}

Friends.propTypes = {
    isOnline: PropTypes.bool,
    avatar:PropTypes.string,
    name: PropTypes.string,
}