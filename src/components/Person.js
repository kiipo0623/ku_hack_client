import styles from '../styles/Person.module.css';
import INFJ from '../assets/images/mbti/INFJ.png';
import INTJ from '../assets/images/mbti/INTJ.png';
import INFP from '../assets/images/mbti/INFP.png';
import INTP from '../assets/images/mbti/INTP.png';
import ISFJ from '../assets/images/mbti/ISFJ.png';
import ISTJ from '../assets/images/mbti/ISTJ.png';
import ISFP from '../assets/images/mbti/ISFP.png';
import ISTP from '../assets/images/mbti/ISTP.png';
import ENFJ from '../assets/images/mbti/ENFJ.png';
import ENTJ from '../assets/images/mbti/ENTJ.png';
import ENFP from '../assets/images/mbti/ENFP.png';
import ENTP from '../assets/images/mbti/ENTP.png';
import ESFJ from '../assets/images/mbti/ESFJ.png';
import ESTJ from '../assets/images/mbti/ESTJ.png';
import ESFP from '../assets/images/mbti/ESFP.png';
import ESTP from '../assets/images/mbti/ESTP.png';

function Person({nickname, description, mbti}) {

    return (
        <div className={styles.Outer}>
            <div>
            <img  className={styles.Img} src={ require('../assets/images/mbti/'+String(mbti)+'.png')}/>
            </div>
            <div className={styles.Inner}>
            <p className={styles.Nickname}>{nickname}</p>
            <p className={styles.Mbti}>{mbti}</p>
            <p className={styles.Description}>{description}</p>
            </div>
        </div>
    )
}

export default Person;