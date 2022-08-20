import styles from '../styles/HomePage.module.css';


function HomePage() {

    return (
        <body className={styles.body}>
        <div>    
        <img src={ require('../assets/images/mbti/INFJ.png')}/>
        </div>
        </body>
    )
}

export default HomePage;