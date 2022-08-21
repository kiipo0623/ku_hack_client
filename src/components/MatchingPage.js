import axios from 'axios';
import { useState, useEffect } from 'react';

function MatchingPage() {
    const URL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching';
    const WELLURL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/well_fit';
    const NOTURL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/not_fit';

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

    const getWell = async(event) => {
        await axios.get(WELLURL, 
            {params: {min_n: min_n, max_n: max_n, gender: gender, university: tmp}})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getNot = async(event) => {
        await axios.get(NOTURL, 
            {params: {min_n: min_n, max_n: max_n, gender: gender, university: tmp}})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //await 삭제 redirect
    const onClick = async(event) => {
        event.preventDefault();
        getWell(event);
        getNot(event);
        window.location.href = "/solution"; 
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