import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/header/Header";
import SubredditList from "../components/subredditsSideBar/SubredditList";

function App() {
  return (
    <>
      <header className="App navbar-background mb-0">
        <Container>
          <Row>
            <Header />
          </Row>
        </Container>
      </header>

        <Container className="fluid pb-3">
        <Row className="gap-3">
          <Col className="bg-body-tertiary border rounder-3">
            <SubredditList />
          </Col>
          <Col xs={7} className="bg-body-tertiary border rounder-3">
            {/* <Subreddits /> */}
          </Col>
          <Col className="bg-body-tertiary border rounder-3">
            {/* <Subreddits /> */}
          </Col>
        </Row>
        </Container>

    </>
  );
}

export default App;
