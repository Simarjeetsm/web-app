import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Contact';
import {BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
