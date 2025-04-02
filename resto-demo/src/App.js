
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
    
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
