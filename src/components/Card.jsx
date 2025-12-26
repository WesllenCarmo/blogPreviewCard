import styles from './Card.module.css';
import cardImage from '../../src/assets/illustration-article.svg';
function Card({subject, data, title, description, authorImage, authorImageAlt, authorName}) {
    return (
        <div className={styles.card}>
            <img src={cardImage} alt="Card Image"/>
            <div className={styles.textContainer}>
                <p>{subject}</p>
                <p>{data}</p>
                <h1>{title}</h1>
                <p>{description}</p>
            <div className={styles.authorContainer}>
                <img src={authorImage} alt={authorImageAlt}/>
                <p>{authorName}</p>
            </div>
            </div>
        </div>
    )
}
export default Card;