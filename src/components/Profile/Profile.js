import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ name, tag, location, stats, avatar }) {
    return (
      <div className={s.profile}>
        <div className={s.cart}>
          <img src={avatar} alt={ name } className={s.avatar}/>
          <p className={s.name} >{ name} </p>
          <p className={s.tag}>@{ tag }</p>
          <p className={s.location}>{ location }</p>
        </div>

  <ul className={s.stats}>
    <li className={s.liStyles}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{ stats.followers }</span>
    </li>
    <li className={s.liStyles}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{ stats.views }</span>
    </li>
    <li className={s.liStyles}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{ stats.likes }</span>
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