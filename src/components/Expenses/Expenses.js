import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses({ expensesData }) {
   
    const [dateFilter, setDateFilter] = useState('2020')

    const filterValueHandler = (filter) => {
           setDateFilter(filter)
             }


    return (
        
            <Card className="expenses">
              <ExpensesFilter selectedYear={dateFilter} onChangeFilter={filterValueHandler}/> 
                {expensesData.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
       
    );
}

export default Expenses;
