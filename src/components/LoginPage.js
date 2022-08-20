import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/LoginPage.module.css';

function LoginPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.target.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onClick = async(event) => {
        event.preventDefault();
        console.log('click');
        const payload = {
            user_id: id,
            user_password: password,
        }

        await axios.get('https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/user/login/',
        {params: {user_id: id, user_password: password}}
        )
        .then((res) => {
            console.log("res", res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <body>
        <div>
            <form>
            <div className={styles.RectDesign}> 
                <div className={styles.Logo}>
                    <img src={ require('../assets/images/login/logo.png')}/>
                </div>
                <div className={styles.Name}>
                    <img src={ require('../assets/images/login/MTM.png')}/>
                </div>
                <p className={styles.TextU}>맨투맨</p>
                <p className={styles.TextD}>MBTI to MBTI</p>
            </div>

            <div className={styles.Block}>
                <p className={styles.LoginText}>로그인</p>

                <p className={styles.IDText}>아이디</p>
                <input type="text" className={styles.Id} name="id"  value={id} onChange={onIdHandler}></input>

                <p className={styles.PWText}>비밀번호</p>
                <input type="text" name="password" value={password} onChange={onPasswordHandler}></input>

            </div>

            <button type="submit" onClick={onClick}>제출</button>
            </form>
            </div>
            </body>
        
    )
}

export default LoginPage;