import styles from '../styles/Person.module.css';

function Person({nickname, description, mbti}) {
    return (
        <div className={styles.Outer}>
            <div className={styles.Inner}>
            <p className={styles.Nickname}>{nickname}</p>
            <p className={styles.Mbti}>{mbti}</p>
            <p className={styles.Description}>{description}</p>
            </div>
        </div>
    )
}

export default Person;