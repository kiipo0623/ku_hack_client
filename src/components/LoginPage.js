import axios from 'axios';
import { React } from 'react';
import { useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link} from 'react-router-dom';


function LoginPage() {
    const URL = 'http://ec2-54-180-8-145.ap-northeast-2.compute.amazonaws.com:8080/user/login';
    const TESTURL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/user/login';
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.target.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onClickLogin = (event) => {
        event.preventDefault();
        console.log('click');
        const payload = {
            user_id: id,
            user_password: password,
        }

        axios.get(URL,
        {params: {user_id: id, user_password: password}}
        )
        .then((res) => {
            console.log("res", res);
        })
        .catch((err) => {
            console.log(err);
        });

        // window.location.href = "/matching"; 
    }

    const onClickJoin = () => {
        window.location.href = "/register";
        console.log("done");
    }

    return (
        <body>
        <div>
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
                <input type="text" className={styles.Pw} name="password" value={password} onChange={onPasswordHandler}></input>


                <button type="submit" className={styles.LoginBtn} onClick={onClickLogin}>로그인</button>
                <button type="submit" className={styles.JoinBtn} onClick={onClickJoin}>회원가입</button>
            
            </div>
            </div>
            </body>
        
    )
}

export default LoginPage;