import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import SigninPage from './components/SigninPage.js';
import MatchingPage from './components/MatchingPage.js';
import LogPage from './components/LogPage.js';
import SelectPage from './components/SelectPage.js';
import RandomPage from './components/RandomPage.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SigninPage />} />
        <Route path="/matching" element={<MatchingPage />} />
          <Route path="/matching/select" element={<SelectPage />} />
          <Route path="/matching/random" element={<RandomPage />} />
        <Route path="/log" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;