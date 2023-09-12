import './App.css';
import { Routes, Route } from 'react-router-dom';
import InfoPage from './components/info/InfoPage';
import Home from './components/home/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/connect/:userId" element={<InfoPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
