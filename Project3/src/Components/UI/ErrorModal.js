import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = ({ title, message, onConfirm }) => {
    return (
        <>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>

            </Card>
        </>
    )
}

const ErrorModal = ({ title, message, onConfirm }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={title} message={message} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal;