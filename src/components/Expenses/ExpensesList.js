import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
    // If there are no expenses, show a message
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    // Otherwise, show a list of expenses
    return (
        <ul className="expenses-list">
            {expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />;
            })}
        </ul>
    );
};

export default ExpensesList;
