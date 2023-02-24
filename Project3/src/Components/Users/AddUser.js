import { useState, useRef } from 'react';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name'
            });

            return;
        }

        onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

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
                    <input id='username' type="text" required ref={nameInputRef} />
                    <label htmlFor='userAge'>Age (Years)</label>
                    <input id='userAge' type="number" min='1' required ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;
