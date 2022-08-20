import axios from 'axios';
import { useState } from 'react';

function SigninPage() {
    const URL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io';

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniv] = useState("");
    const [mbti, setMbti] = useState("");
    const [name, setName] = useState("");
    const [studentNumber, setStudentNum] = useState("");
    const [description, setDescription] = useState("");

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

    const onNameHandler = (event) => {
        setName(event.target.value);
    }

    const onStudentNumHandler = (event) => {
        setStudentNum(event.target.value);
    }

    const onDescriptionHandler = (event) => {
        setDescription(event.target.value);
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
            name: name,
        }

        await axios.post('https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/user/register', payload)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <form>
                <p>이름</p>
                <input type="text" name="name"  value={name} onChange={onNameHandler}></input>

                <p>아이디</p>
                <input type="text" name="id"  value={id} onChange={onIdHandler}></input>

                <p>비밀번호</p>
                <input type="text" name="password" value={password} onChange={onPasswordHandler}></input>

                <p>학교</p>
                <input type="text" name="univ" value={university} onChange={onUnivHandler}></input>

                <p>학번</p>
                <input type="text" name="univ" value={studentNumber} onChange={onStudentNumHandler}></input>

                <p>설명</p>
                <input type="text" name="univ" value={description} onChange={onDescriptionHandler}></input>

                <p>mbti</p>
                <input type="text" name="univ" volumn={mbti} onChange={onMbtiHandler}></input>


                <button type="submit" onClick={onClick}>제출</button>
            </form>
        </div>
    );
}

export default SigninPage;