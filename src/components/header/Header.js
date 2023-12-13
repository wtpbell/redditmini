import redditLogo from "../../images/reddit-logo.png";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Container>
      <Nav className="me-auto">
        <Nav.Link className="d-flex align-items-center text-dark text-decoration-none" href="/">
            <img className='logo d-inline-block align-top me-3' src={redditLogo} alt='reddit logo' /> 
            <p className='reddit-color app-name fs-2'>Reddit<span id='minimal-color'>Minimal</span></p>
        </Nav.Link>
      </Nav>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button className="btn-primary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
