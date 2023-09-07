import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <h1><Link to="/" className="no-style">&lt;</Link></h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
