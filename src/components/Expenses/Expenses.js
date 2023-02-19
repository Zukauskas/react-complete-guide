import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses({ expensesData }) {
    const [dateFilter, setDateFilter] = useState('2021');

    const filterValueHandler = (filter) => {
        setDateFilter(filter);
    };

    const filteredExpenses = expensesData.filter((expense) => {
        return expense.date.getFullYear().toString() === dateFilter;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={dateFilter}
                onChangeFilter={filterValueHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
