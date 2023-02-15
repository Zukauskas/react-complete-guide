import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses({ expensesData }) {
    return (
        <Card className="expenses">
            {expensesData.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses
