import axios from 'axios';
import { useState, useEffect } from 'react';
import Person from './Person.js';

function SolutionPage() {
    // 추후 수정
    const TEST_WELL_URL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/matching/well_fit';
    const TEST_NOT_URL = 'https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/matching/not_fit';

    const [wellLoading, setWellLoading] = useState(true);
    const [notLoading, setNotLoading] = useState(true);
    const [wellpeople, setWellPeople] = useState([]);
    const [notpeople, setNotPeople] = useState([]);    

    const getWellPeople = async() => {    
        try{
        const res = await axios.get(TEST_WELL_URL);
        const obj = await res.data;
        // 사람 한명당 하나씩 매핑하도록

        setWellPeople(obj.people);
        setWellLoading(false);
        console.log("well people");
        console.log(obj.people);
        
        } catch (err) {
            console.log(err);
        }

    }

    const getNotPeople = async() => {
        try{
            const res = await axios.get(TEST_NOT_URL);
            const obj = await res.data;
            // 사람 한명당 하나씩 매핑하도록

            setNotPeople(obj.people);
            setNotLoading(false);
            console.log("bad people");
            console.log(obj.people);
            
            } catch (err) {
                console.log(err);
        }
    }

    useEffect(() => {
        getWellPeople();
    }, [])

    useEffect(() => {
        getNotPeople();
    })
    
    return (
        <div>
            <p>solu</p>
            <div>
            { wellLoading ? (
                <h1>Loading...</h1>
            ) : 
            <div name={wellpeople}>
            {
                wellpeople.map(person => (
                    <Person key={person.nickname} nickname={person.nickname} description={person.description} mbti={person.mbti} />
                ))
            }
            </div>
            }
            </div>

            <div>
            { notLoading ? (
                <h1>Loading...</h1>
            ) : 
            <div name={notpeople}>
            {
                notpeople.map(person => (
                    <Person key={person.nickname} nickname={person.nickname} description={person.description} mbti={person.mbti} />
                ))
            }
            </div>
            }
            </div>            
        </div>
    )
}

export default SolutionPage;