import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import SigninPage from './components/SigninPage.js';
import MatchingPage from './components/MatchingPage.js';
import LogPage from './components/LogPage.js';
import SolutionPage from './components/SolutionPage.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SigninPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/log" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;