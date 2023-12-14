import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "../components/postLists/Post";
import PostLists from "../components/postLists/PostLists";
import NoMatch from "../components/noMatch/NoMatch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/header/Header";
import SubredditList from "../components/subredditsSideBar/SubredditList";

function App() {
  return (
    <>
      <Router>
        <header className="App navbar-background mb-0">
          <Header />
        </header>
        <Container className="fluid pb-3">
          <Row className="gap-4">
            <Col xs={3} className="bg-body-tertiary border rounder-3">
              <SubredditList />
            </Col>

            <Col xs={7} className="bg-body-tertiary border rounder-3">
              <Routes>
                <Route path="/" element={<Post />} />
                <Route path="/posts" element={<PostLists />} />
                <Route path="/posts/:filter" element={<PostLists />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Col>
            <Col className="bg-body-tertiary border rounder-3">
              {/* <Subreddits />  */}
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
