import React from 'react';
import PropTypes from 'prop-types';

import Friends from './Friends';
 


export default function FriendListItem({ friends }) {
    return (
        <ul>
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

