import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function StaticsList({ label, percentage }) {
  return (
    <li className={s.item}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}

StaticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
