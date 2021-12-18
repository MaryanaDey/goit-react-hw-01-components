import React from 'react';
import PropTypes from 'prop-types';

import Friends from './Friends';
import s from './Friend.module.css';
 


export default function FriendListItem({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(item => (
               <Friends 
               key = {item.id}
               isOnline = {item.isOnline}
               name = {item.name}
               avatar = {item.avatar}
               />
            ))}
        </ul>
    );
};


FriendListItem.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
      
        }),
    ),
}

