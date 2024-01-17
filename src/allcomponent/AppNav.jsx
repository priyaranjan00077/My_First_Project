import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../assets/imag/logo1.png"
function AppNav() {
  return (
    <Navbar expand="lg" className="row" style={{width:"100%"}}>
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 m-5  col-lg-5"
            style={{ maxHeight: '100px', }}
            navbarScroll
          >
            <Nav.Link href="/"   >Home</Nav.Link>
            <Nav.Link href="" className='mr-3'>Service</Nav.Link>
           
            <Nav.Link href="#" className='mr-3'>
              About Us
            </Nav.Link>
            <Nav.Link href="#" className='mr-3'>
              Carrier
            </Nav.Link>
            <Nav.Link href="#" className='mr-3'>
                Blog
            </Nav.Link>
           
            
          </Nav> 
          <Nav className='col-lg-2'><img src={image} alt="" className='' style={{height:"50px",}} /></Nav>
          <Form className="d-flex  col-lg-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;