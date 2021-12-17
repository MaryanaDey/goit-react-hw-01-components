import React from 'react';
import PropTypes from 'prop-types';

import Statistics from './StatisticsList';

export default function StatisticsList({ stats }) {
    return (
        <section >
        <h2 >Upload stats</h2>
      
        <ul >
          {stats.map(item => (
             <Statistics
             key = {item.id}
             label={item.label}
             percentage={item.percentage}
              /> 
          ))}
        </ul>
      </section>
    );
};


Statistics.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
    })
)
}