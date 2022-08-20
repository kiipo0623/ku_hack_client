import axios from 'axios';
import { useState, useEffect } from 'react';
import Person from './Person.js';
import styles from '../styles/SolutionPage.module.css';
import clsx from 'clsx';

function SolutionPage() {
    // 추후 수정
    const TEST_WELL_URL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/well_fit';
    const TEST_NOT_URL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/not_fit';

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
    }, [])
    
    return (
        <div>
            <div className={styles.Logo}>
            <img src={ require('../assets/images/logo.png')}/>
            </div>
            <div>
                <h1 className={clsx(styles.H1, styles.Randomtitle)}>랜덤친구 성격 맞추기</h1>
                <p className={clsx(styles.Text, styles.Randomtext)}>성격을 모르는 친구와 대화하고, <br /> 재미있는 이야기를 나눠보세요.</p>
                <button>START</button>
                <button>START</button>
                <h1 className={clsx(styles.H1, styles.Mytitle)}>오늘의 내 성격 테스트</h1>
                <p className={clsx(styles.Text, styles.Mytext)}>하루하루 달라지는 기분... <br /> 오늘의 나는 어떨까요?</p>
            </div>
            <div>
            { wellLoading ? (
                <h1 className={clsx(styles.Text, styles.Randomtext)}>Loading...</h1>
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