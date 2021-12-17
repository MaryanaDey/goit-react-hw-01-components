import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, stats, avatar }) {
    return (
        <div >
  <div >
    <img src={avatar} alt={name} />
    <p >{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span >Views</span>
      <span >{stats.views}</span>
    </li>
    <li>
      <span >Likes</span>
      <span >{stats.likes}</span>
    </li>
  </ul>
</div>
    );
};



Profile.propTypes = {
name: PropTypes.string,
location: PropTypes.string,
avatar: PropTypes.string,
tag: PropTypes.string,
stats: PropTypes.object
};