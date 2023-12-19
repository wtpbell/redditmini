import redditLogo from "../../images/reddit-logo.png";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  const keywordSearching = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
  };

  return (
    <Container className="container-fluid d-grid gap-3 align-items-center">
      <Navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Nav className="me-auto col-6">
          <Nav.Link
            className="d-flex align-items-center text-dark text-decoration-none"
            href="/"
          >
            <img
              className="logo d-inline-block align-top me-3"
              src={redditLogo}
              alt="reddit logo"
            />
            <p className="reddit-color app-name fs-2">
              Reddit<span id="minimal-color">Minimal</span>
            </p>
          </Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 col-auto col-lg-auto mb-lg-0 me-lg-3 w-100"
              onChange={keywordSearching}
            />
          </Form>
          <Link to={`/search/${keyword}`}>
            <Button
              className="btn-primary col-auto ms-1"
              type="submit"
              onSubmit={handleSubmit}
            >
              Submit
            </Button>
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
