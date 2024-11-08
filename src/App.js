
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import logo from './images/img/logo.png';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contactt';
import Gallery from './pages/Gallery';
import { NavLink } from 'react-router-dom';




function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              <img className='logo' src={logo} alt='logo' /> TASTY TWIST
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <NavLink to="/" className="nav-item nav-link">HOME</NavLink>
              <NavLink to="/menu" className="nav-item nav-link">MENU</NavLink>
              <NavLink to="/about" className="nav-item nav-link">ABOUT</NavLink>
              <NavLink to="/gallery" className="nav-item nav-link">GALLERY</NavLink>
              <NavLink to="/contact" className="nav-item nav-link">CONTACT</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
