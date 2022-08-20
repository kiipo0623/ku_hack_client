import axios from 'axios';
import { useState } from 'react';

function MatchingPage() {
    const URL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/matching/';

    const [region, setRegion] = useState("");
    const [gender, setGender] = useState("");
    const [min_n, setMin] = useState("");
    const [max_n, setMax] = useState("");
    const [type, setType] = useState("");

    const onRegionHandler = (event) => {
        setRegion(event.target.value);
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

    const onTypeHandler = (event) => {
        setType(event.target.value);
    }

    const onClick = async(event) => {
        event.preventDefault();
        
        await axios.get(URL, 
        {params: {matching_type:type, min_n: min_n, max_n: max_n, gender: gender, region: region}})
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
            <p>지역</p>
            <input type="text" name="region" value={region} onChange={onRegionHandler}></input>

            <p>성별</p>
            <input type="text" name="gender" value={gender} onChange={onGenderHandler}></input>
            
            <p>나이 설정</p>
            <input type="number" name="min_n" value={min_n} onChange={onMinHandler}></input>
            <input type="number" name="max_n" value={max_n} onChange={onMaxHandler}></input>
            
            <p>선택, 랜덤</p>
            <input type="text" name="password" value={type} onChange={onTypeHandler}></input>
            
            <button type="submit" onClick={onClick}>제출</button>
            </form>
        </>
    )
}

export default MatchingPage;