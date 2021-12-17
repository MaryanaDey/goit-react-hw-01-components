import React from 'react';
import PropTypes from 'prop-types';

export default function TransactionTable({ type, amount, currency }) {
    return (
        <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    );
}

TransactionTable.propTypes = {
    type: PropTypes.string,
    amount:PropTypes.number,
    currency:PropTypes.string,
}