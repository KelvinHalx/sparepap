import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../images/Logo.png';


function CollapsibleExample() {
  return (
    <div className='container'> 
        <div className='row'> 
            <div className='col-md-1'></div>
            <div className='col-md-10'>


    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  className="shadow-lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
           
              className="d-inline-block align-top"
              alt="logo"
            />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto nn">
            <form>
              <input type="search" placeholder="Search..."/>
              <button type="submit">Search</button>
            </form>
          </Nav>
          <Nav >
            <Nav.Link href="#features" className='navtitle'>Find Mechanic</Nav.Link>
            <Nav.Link href="#pricing" className='navtitle'>Book service</Nav.Link>
            <NavDropdown className='navtitle drop' title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='navtitle'>Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navtitle'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='navtitle'>Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='navtitle drop' title="Accounts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='navtitle'>Accounts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navtitle'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='navtitle'>Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
            <div className='col-md-1'></div>

    
    </div>

    </div>
  );
}

export default CollapsibleExample;  