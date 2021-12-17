import React from 'react';
import PropTypes from 'prop-types';

import TransactionList from './TransactionList';




export default function TransactionHystory({ items }){
    return (
        <table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(item => (
                <TransactionList
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                />
   ))}
  </tbody>
</table>
    )
}


TransactionHystory.propTyes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
        }),
    )
}