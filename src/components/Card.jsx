import styles from './Card.module.css';
import cardImage from '../../src/assets/illustration-article.svg';
function Card({subject, data, title, description, authorImage, authorImageAlt, authorName}) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={cardImage} alt="Card Image"/>
            <div className={styles.textContainer}>
                <p className={styles.subject}>{subject}</p>
                <p>Published {data}</p>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            <div className={styles.authorContainer}>
                <img src={authorImage} alt={authorImageAlt}/>
                <p>{authorName}</p>
            </div>
            </div>
        </div>
    )
}
export default Card;