import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/SigninPage.module.css';
import clsx from 'clsx';
import Modal from './SigninModal.js';

function SigninPage() {
    const URL = 'http://ec2-54-180-8-145.ap-northeast-2.compute.amazonaws.com:8080/user/register';
    const TESTURL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/user/register';


    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniv] = useState("");
    const [mbti, setMbti] = useState("");
    const [nickName, setNickName] = useState("");
    const [studentNumber, setStudentNum] = useState("");
    const [description, setDescription] = useState("");
    const [gender, setGender] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

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
        // event.preventDefault();
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
            setModalOpen(true);

        })
        .catch((err) => {
            console.log(err);
        });
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className={styles.RectDesign}> 
                <div className={styles.Logo}>
                    <img src={ require('../assets/images/login/logo.png')}/>
                </div>
                <div className={styles.Name}>
                    <img src={ require('../assets/images/login/MTM.png')}/>
                </div>
                <p className={styles.TextU}>?????????</p>
                <p className={styles.TextD}>MBTI to MBTI</p>
            </div>

            <div className={styles.Block}>
                <p className={styles.JoinText}>????????????</p>
                
                <p className={clsx(styles.Text, styles.Id)}>?????????</p>
                <input type="text" className={clsx(styles.Input, styles.I_Id)} name="id"  value={id} onChange={onIdHandler}></input>

                <p className={clsx(styles.Text, styles.Password)}>????????????</p>
                <input type="text" name="password" className={clsx(styles.Input, styles.I_Password)} value={password} onChange={onPasswordHandler}></input>

                <p className={clsx(styles.Text, styles.Nickname)}>?????????</p>
                <input type="text" className={clsx(styles.Input, styles.I_Nickname)} name="nickName"  value={nickName} onChange={onNickNameHandler}></input>

                <p className={clsx(styles.Text, styles.Gender)}>??????</p>
                <input type="text" className={clsx(styles.Input, styles.I_Gender)} name="gender" value={gender} onChange={onGenderHandler}></input>

                <p className={clsx(styles.Text, styles.Univ)}>????????????</p>
                <input type="text" name="univ" className={clsx(styles.Input, styles.I_Univ)} value={university} onChange={onUnivHandler}></input>

                <p className={clsx(styles.Text, styles.Stud)}>??????</p>
                <input type="text" name="studentnumber" className={clsx(styles.Input, styles.I_Stud)} value={studentNumber} onChange={onStudentNumHandler}></input>

                <p className={clsx(styles.Text, styles.Mbti)}>MBTI</p>
                <input type="text" name="mbti" className={clsx(styles.Input, styles.I_Mbti)} volumn={mbti} onChange={onMbtiHandler}></input>

                <p className={clsx(styles.Text, styles.Desc)}>??????</p>
                <input type="text" name="univ" className={clsx(styles.Input, styles.I_Description)} value={description} onChange={onDescriptionHandler}></input>


                <button className={styles.Btn} type="submit" onClick={onClick}>???????????? ??????</button>
                <Modal open={modalOpen} close={closeModal} header="Modal heading">
                    ??????????????? ???????????????. <p></p>??? ????????? ?????? ????????????????
                </Modal>
            </div>

        </div>
    );
}

export default SigninPage;