import redditLogo from "../../images/reddit-logo.png";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  const keywordSearching = (e) => {
    setKeyword(e.currentTarget.value);
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword("");
  };

  // console.log(keyword);

  return (
    <Container className="container-fluid d-grid gap-3 align-items-center">
      <Navbar className="d-flex flex-nowrap ">
        <Nav className="me-auto ">
          <HamburgerMenu />
          <Navbar.Brand
            className="d-flex align-items-center text-dark text-decoration-none"
            href="/"
          >
            <img
              className="logo d-inline-block align-top me-3"
              src={redditLogo}
              alt="reddit logo"
              height="80"
              width="auto"
            />
            <p className="reddit-color app-name fs-2">
              Reddit<span id="minimal-color">Minimal</span>
            </p>
          </Navbar.Brand>
        </Nav>
        
          <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  name='keywordSearching'
                  placeholder="Search Posts..."
                  onChange={keywordSearching}
                  value={keyword}
                  className="me-2"
                />
                <Link to={`/search/${keyword}`}>
                  <Button
                    className="col-auto"
                    type="submit"
                  >
                    Submit
                  </Button>
                  
                </Link>
          </Form>
      </Navbar>
    </Container>
  );
};

export default Header;
