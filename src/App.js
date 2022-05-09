import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Join from './pages/join';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
