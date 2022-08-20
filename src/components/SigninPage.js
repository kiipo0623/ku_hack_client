import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/SigninPage.module.css';


function SigninPage() {
    const URL = 'http://ec2-54-180-8-145.ap-northeast-2.compute.amazonaws.com:8080/user/register';

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniv] = useState("");
    const [mbti, setMbti] = useState("");
    const [nickName, setNickName] = useState("");
    const [studentNumber, setStudentNum] = useState("");
    const [description, setDescription] = useState("");
    const [gender, setGender] = useState("");

    const onIdHandler = (event) => {
        setId(event.target.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onUnivHandler = (event) => {
        setUniv(event.target.value);
    }

    const onMbtiHandler = (event) => {
        setMbti(event.target.value);
    }

    const onNickNameHandler = (event) => {
        setNickName(event.target.value);
    }

    const onStudentNumHandler = (event) => {
        setStudentNum(event.target.value);
    }

    const onDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const onGenderHandler = (event) => {
        setGender(event.target.value);
    }

    const onClick = async(event) => {
        event.preventDefault();
        console.log('click');
        const payload = {
            user_id: id,
            user_password: password,
            university: university,
            mbti: mbti,
            student_number: studentNumber,
            description: description,
            nickname: nickName,
            gender: gender,
        }

        await axios.post(URL, payload)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
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
                
                <p className={styles.IdText}>아이디</p>
                <input type="text" className={styles.Id} name="id"  value={id} onChange={onIdHandler}></input>

                <p className={styles.PwText}>비밀번호</p>
                <input type="text" name="password" className={styles.Pw} value={password} onChange={onPasswordHandler}></input>

                <p className={styles.NickNameText}>닉네임</p>
                <input type="text" className={styles.NickName} name="nickName"  value={nickName} onChange={onNickNameHandler}></input>

                <p className={styles.GenderText}>성별</p>
                <input type="text" className={styles.Gender} name="gender" value={gender} onChange={onGenderHandler}></input>

                <p className={styles.UnivText}>학교</p>
                <input type="text" name="univ" className={styles.Univ} value={university} onChange={onUnivHandler}></input>

                <p className={styles.StudNumText}>학번</p>
                <input type="text" name="univ" className={styles.StudNum} value={studentNumber} onChange={onStudentNumHandler}></input>

                <p className={styles.MbtiText}>mbti</p>
                <input type="text" name="univ" className={styles.Mbti} volumn={mbti} onChange={onMbtiHandler}></input>

                <p className={styles.DescText}>설명</p>
                <input type="text" name="univ" className={styles.Desc} value={description} onChange={onDescriptionHandler}></input>

                

                <button type="submit" onClick={onClick}>제출</button>
            </div>

        </div>
    );
}

export default SigninPage;