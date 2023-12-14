import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div className='namenav'>
        <h1 className='myname' >Hiroaki Sotooka</h1> <NavBar />
      </div>
      <div className='line'></div>
      <Routes>
        <Route
        exact
        path='/'
        element={<Home />}
        />
        <Route
        exact
        path='/about'
        element={<About />}
        />
        <Route
        exact
        path='/projects'
        element={<Projects />}
        />
        <Route
        exact
        path='/resume'
        element={<Resume />}
        />
        <Route
        exact
        path='/contact'
        element={<Contact />}
        />     
      </Routes>
    </div>
  );
}

export default App;
