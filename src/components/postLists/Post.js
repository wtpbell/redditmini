import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import redditLogo from "../../images/reddit-logo.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const Post = ({post}) => {

  return (
    <>
      <Card className="text-center d-flex flex-column mb-4">
        <Row>
          <Col
            className="col-md-3 col-lg-2 p-0"
            style={{ width: "4.5rem"}}
          >
            <ListGroup >
              <ListGroup.Item >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
              </ListGroup.Item>
              <ListGroup.Item ><small>38.5k</small></ListGroup.Item>
              <ListGroup.Item >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                  />
                </svg>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            <Card.Header>
             <Card.Text>{post.author} to {post.subreddit}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
              <Card.Img variant="top" src={post.image} />
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer className="d-flex list-unstyled mt-auto">
          <ListGroup.Item className="me-auto">Posted by {post.author}</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center me-auto">
            {post.time}
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-chat-left-text"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
            <span className="ms-1">{post.numOfComments}</span>
          </ListGroup.Item>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Post;
