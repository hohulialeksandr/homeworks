import React from 'react';

import './TransactionHistory.css'

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className="transaction_history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map((e, id) => <tr key={id}>
                            <td><center>{e.type}</center></td>
                            <td><center>{e.amount}</center></td>
                            <td><center>{e.currency}</center></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistory