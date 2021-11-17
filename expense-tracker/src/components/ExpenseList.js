import React from 'react';

import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

function ExpenseList (props) {
    const { expenses = [] } = props;
    return (
        <div className="expenses">
            <h2>Let's get started</h2>
            {
                expenses.map((expense) => {
                    const { date, title, amount, id } = expense;
                    return (
                        <div key={id}>
                            <ExpenseItem date={date} title={title} amount={amount} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ExpenseList;