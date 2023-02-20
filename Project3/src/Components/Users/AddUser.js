import { useState } from 'react';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name'
            });

            return;
        }

        onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input value={enteredUsername} id='username' type="text" onChange={usernameChangeHandler} required />
                    <label htmlFor='userAge'>Age (Years)</label>
                    <input value={enteredAge} id='userAge' type="number" min='1' onChange={ageChangeHandler} required />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;