import axios from 'axios';
import { useState } from 'react';

function MatchingPage() {
    const URL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/matching';
    const WELLURL = 'http://ec2-54-180-8-145.ap-northeast-2.compute.amazonaws.com:8080/matching/well_fit';
    const NOTURL = 'http://ec2-54-180-8-145.ap-northeast-2.compute.amazonaws.com:8080/matching/not_fit';

    const [university, setUniversity] = useState("");
    const [gender, setGender] = useState("");
    const [min_n, setMin] = useState("");
    const [max_n, setMax] = useState("");
    const tmp = ['seoul', 'korea'];

    const onUniversityHandler = (event) => {
        setUniversity(event.target.value);
    }

    const onGenderHandler = (event) => {
        setGender(event.target.value);
    }

    const onMinHandler = (event) => {
        setMin(event.target.value);
    }

    const onMaxHandler = (event) => {
        setMax(event.target.value);
    }

    const onClick = async(event) => {
        event.preventDefault();
        
        await axios.get(URL, 
        {params: {min_n: min_n, max_n: max_n, gender: gender, university: tmp}})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

        await axios.get(WELLURL, 
            {params: {min_n: min_n, max_n: max_n, gender: gender, university: university}})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <form>
            <p>학교</p>
            <input type="text" name="university" value={university} onChange={onUniversityHandler}></input>

            <p>성별</p>
            <input type="text" name="gender" value={gender} onChange={onGenderHandler}></input>
            
            <p>나이 설정</p>
            <input type="number" name="min_n" value={min_n} onChange={onMinHandler}></input>
            <input type="number" name="max_n" value={max_n} onChange={onMaxHandler}></input>
            
            <button type="submit" onClick={onClick}>제출</button>
            </form>
        </>
    )
}

export default MatchingPage;