import React from 'react';
import axios from 'axios';
import styles from '../styles/SolutionModal.css'
import { useState, createContext } from 'react';


export const WellContext = createContext([]);
export const NotContext = createContext([]);
    

const Modal = (props) => {
    const URL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching';
    const WELLURL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/well_fit';
    const NOTURL = 'https://c5beee62-b012-4cbd-bd2f-a890857ef8b8.mock.pstmn.io/matching/not_fit';

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
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
    const { open, close } = props;
    const [university, setUniversity] = useState("");
    const [gender, setGender] = useState("");
    const [min_n, setMin] = useState("");
    const [max_n, setMax] = useState("");

    let wellpeople = [];
    let notpeople = [];

    const getWell = async(event) => {
        try{
            const res = await axios.post(WELLURL, 
                {min_n: min_n, max_n: max_n, gender: gender, university: university});
            console.log(res);
        }catch (err) {
            console.log(err);
        }
    }

    const getNot = async(event) => {
        try{
            const res = await axios.post(NOTURL, 
                {min_n: min_n, max_n: max_n, gender: gender, university: university});
            console.log(res);

        }catch (err) {
            console.log(err);
        }
    }

        //await 삭제 redirect
        const onClick = (event) => {
            event.preventDefault();
            getWell(event);
            getNot(event);
            close();
        }    
    

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <WellContext.Provider value={wellpeople}>
    <NotContext.Provider value={notpeople}>   
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>{props.children}
          <div>
          <p>학교</p>
            <input type="text" name="university" value={university} onChange={onUniversityHandler}></input>
            <p>성별</p>
            <input type="text" name="gender" value={gender} onChange={onGenderHandler}></input>
            <p>나이 설정</p>
            <input type="number" name="min_n" value={min_n} onChange={onMinHandler}></input>
            <input type="number" name="max_n" value={max_n} onChange={onMaxHandler}></input>
          </div>
          </main>
          <footer>
            <button type="submit" onClick={onClick}>
              제출
            </button>
          </footer>
        </section>
      ) : null}
    </div>
    </NotContext.Provider>
    </WellContext.Provider>
  );
};
export default Modal;









