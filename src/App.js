import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Sections from './pages/Sections';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
   // Initialize AOS
   useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="App">
      <div className='namenav'>
        <h1 className='myname' >Hiroaki Sotooka</h1> <NavBar />
      </div>
      <Sections />
      {/* <div className='line'></div>
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
      </Routes> */}
    </div>
  );
}

export default App;
