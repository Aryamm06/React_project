
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
// import Home from './pages/Home';
// import logo from './images/img/logo.png'
// import About from './pages/About';
// import Menu from './pages/Menu';
// import Contactt from './pages/Contactt';
// import Gallery from './pages/Gallery';
import {useNavigate,NavLink} from 'react-router-dom';




function App() {
  return (
    <div>
    <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
    <Container>
      <Navbar.Brand>
        <Link to="/" className='navbar-brand text-success fw-semibold'>
          <img className='logo' src={logo} alt='logo'/> TASTY TWIST
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto justify-content-end w-100'>
          <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
          <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
          <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
          <Nav.Link href='/gallery' className='text-uppercase'>Gallery</Nav.Link>
          <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 

{/* footer */}





    </div>
  );
}

export default App;
