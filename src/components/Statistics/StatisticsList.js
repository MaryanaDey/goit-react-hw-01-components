import React from 'react';
import PropTypes from 'prop-types';

export default function StaticsList({label, percentage}) {
    return(
        <li >
      <span >{label}</span>
      <span >{percentage}</span>
    </li>
    )
}

StaticsList.propTypes = {
    label:PropTypes.string,
    percentage: PropTypes.number,
}