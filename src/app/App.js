import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "../components/home/Home";
import Post from "../components/postLists/Post";
import Posts from "../components/postLists/PostLists";
import PostLists from "../components/postLists/PostLists";
import NoMatch from "../features/noMatch/NoMatch";
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
            <Col xs={2} className="bg-body-tertiary border rounder-3">
              <SubredditList />
            </Col>

            <Col xs={7} className="bg-body-tertiary border rounder-3">
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route index element={<Post />} />
                </Route>
                <Route path="/posts" element={<Post />}>
                  {/* <Route index element={<PostLists />} /> */}
                </Route>
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
