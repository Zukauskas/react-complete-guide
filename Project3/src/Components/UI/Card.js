import styles from './Card.module.css';

function Card(props) {
    const classes = props.className + ' ' + styles.card;
    return <div className={classes}>{props.children}</div>;
}

export default Card;