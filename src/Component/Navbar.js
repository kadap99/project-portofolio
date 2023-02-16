import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbarbaru = ()=> {
  return (
    <Navbar expand="lg" className='shadow fw-bold bgnavbar'>
      <Container >
        <Navbar.Brand style={{userSelect: 'none',}} className='navbrand'>TEKNOLOGIKA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" navbg" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className='mx-lg-3 navlink' as={Link} to='/' exact='true' >HOME</Nav.Link>
            <Nav.Link className='mx-lg-3 navlink' as={Link} to='/profil'>PROFIL</Nav.Link>
            <Nav.Link className='mx-lg-3 navlink' as={Link} to='*'>PENDIDIKAN</Nav.Link>
            <Nav.Link className='mx-lg-3 navlink' as={Link} to='/skill'>SKILL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbaru;