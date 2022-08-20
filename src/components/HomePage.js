import axios from 'axios';
function HomePage() {
    const axios = require('axios');

    const getTest = async() => {
        const res = await axios.get('https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/join');
        console.log(res);
    }
    getTest();

    const postTest = async() => {
        const payload = {
            id: "kiipo",
            password: "1234",
            univ: "korea",
            mbti: "INFP"
        }

        await axios.post('https://95518c84-8ff5-4fa5-beb8-bdd73aa905b7.mock.pstmn.io/join', payload)
        .then((res) => {
            console.log(res);
        });
    }

    return (
        <div>
            <p>homepage</p>
            <button onClick={postTest}>post</button>
        </div>
    )
}

export default HomePage;