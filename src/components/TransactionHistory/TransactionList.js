import React from 'react';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

export default function TransactionTable({ type, amount, currency }) {
    return (
        <tr>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
    );
}

TransactionTable.propTypes = {
    type: PropTypes.string,
    amount:PropTypes.number,
    currency:PropTypes.string,
}