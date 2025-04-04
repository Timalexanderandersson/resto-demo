import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/About';
import Gallery from './pages/gallery';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/Hem" element={<Homepage />} />
            <Route path="/galleri" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
