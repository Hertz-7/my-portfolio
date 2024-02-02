import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Appnav() {
  return (
    
    <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
        <Container className='nav-container m-3' >
          <Nav className="me-auto">
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#tech">Technologies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Appnav;
