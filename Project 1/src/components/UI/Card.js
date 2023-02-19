import './Card.css'

function Card({ children, className }) {
    const classes = 'card ' + className
    return <div className={classes}>{children}</div>
}

export default Card
