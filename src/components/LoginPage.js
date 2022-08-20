import axios from 'axios';
import { useState } from 'react';

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

        const sent = await axios.get('https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/user/login',
        {params: {user_id: id, user_password: password}}
        )
        .then((res) => {
            console.log("res", res);
            console.log("snet", sent);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <form>
            <p>아이디</p>
            <input type="text" name="id"  value={id} onChange={onIdHandler}></input>

            <p>비밀번호</p>
            <input type="text" name="password" value={password} onChange={onPasswordHandler}></input>
            
            <button type="submit" onClick={onClick}>제출</button>
            </form>
        </>
        
    )
}

export default LoginPage;