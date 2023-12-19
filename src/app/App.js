import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate, 
  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../components/home/Home";
import PostLists from "../components/postLists/PostLists";
import NoMatch from "../components/noMatch/NoMatch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/header/Header";
import SubredditList from "../components/subredditList/SubredditList";
import SubredditsInfo from "../components/subredditsInfo/SubredditsInfo";
import SelectedSubredditPosts from "../components/subredditList/SelectedSubredditPosts";
import SearchResultPosts from "../components/postLists/SearchResultPosts";

function App() {
  
  return (
    <>
      <Router>
        <header className="App navbar-background py-3 mb-3 border-bottom">
          <Header />
        </header>
        <Container className="fluid pb-3">
          <Row className="gap-4">
            <Col xs={3} className="bg-body-tertiary border rounder-3">
              <SubredditList />
            </Col>

            <Col xs={7} className="bg-body-tertiary border rounder-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:filter" element={<PostLists/>} />
                <Route path='/subreddits/r/:subreddit' element={<SelectedSubredditPosts />} />
                <Route path='/search/:keyword' element={<SearchResultPosts />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Col>
            <Col className="bg-body-tertiary border rounder-3">
              <SubredditsInfo /> 
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
