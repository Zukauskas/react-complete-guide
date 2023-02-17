import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
