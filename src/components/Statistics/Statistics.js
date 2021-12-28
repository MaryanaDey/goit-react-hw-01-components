import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

import Statistics from "./StatisticsList";

export default function StatisticsList({ stats, title }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statistics}>
        {stats.map((item) => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
