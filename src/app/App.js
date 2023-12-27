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
import SelectedSubredditPosts from "../components/subredditList/SelectedSubredditPosts";
import SearchResultPosts from "../components/postLists/SearchResultPosts";



function App() {
  
  return (
    <>
      <Router>
        <header className="App navbar-background mb-3 border-bottom">
          <Header />
        </header>
        <Container className="fluid">
          <Row className="flex-nowrap">
            <Col md={3} className="border rounder-3 d-flex flex-column flex-shrink-1 p-3 d-sm-none d-md-block">
              <SubredditList />
            </Col>

            <Col xs md={9} className="border rounder-3 d-flex flex-column flex-shrink-3 p-3">
        
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:filter" element={<PostLists/>} />
                <Route path='/subreddits/r/:subreddit' element={<SelectedSubredditPosts />} />
                <Route path='/search/:keyword' element={<SearchResultPosts />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
