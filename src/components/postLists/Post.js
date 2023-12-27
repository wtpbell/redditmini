import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CommentList from "../comments/CommentList";
import abbrNum from "../../utilities/abbrNum";


const Post = ({ post, postId}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [showComments, setShowComments] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }

  const toggelCommentBtn = () => {
    setShowComments(!showComments)
  }


  return (
    <>
      <Container>
        <Card className="text-start d-flex flex-column mb-4 mt-3">
          <Row>
            <Col xs={2} >
              <ListGroup className="text-center">
                <ListGroup.Item>
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
                <ListGroup.Item>
                  <small>{post.ups? post.ups : 0}</small>
                </ListGroup.Item>
                <ListGroup.Item>
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
              <Card.Header className="card-header">
                
                {/* <Image src={post.iconImg} /> */}
                <Card.Text >
                  {post.author} to {post.subreddit}
                </Card.Text>
              </Card.Header>
              <Card.Body>
              
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="text">
                  {isReadMore && post.text ? post.text.slice(0,300) : post.text}
                  <span 
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "purple" }}
                  >
                    {isReadMore && post.text && post.text.length > 300 ? "...read more" : null}
                    
                  </span>
                  
                </Card.Text>
                {post.image? <Card.Img src={post.image} /> : null}
                {/* <Button variant="primary">Go somewhere</Button> */}
                {post.video? <video
                  className="ratio ratio-16x9 border rounded"
                  src={post.video.fallback_url}
                  preload="auto"
                  controls
                  autoPlay
                  style={{ minWidth: '120px', maxWidth:'800px' , height: "auto" }}
                ></video> : null}
              </Card.Body>
            </Col>
          </Row>

          <Card.Footer  className="mt-auto text-small card-footer" >
            <Row>
            <ListGroup.Item className="col text-center">
              Posted by {post.author}
            </ListGroup.Item>
            <ListGroup.Item className="col-6 text-center">
              {post.time}
            </ListGroup.Item>
            
            <ListGroup.Item 
              className="col-2 text-center" 
              onClick={toggelCommentBtn} 
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-chat-left-text"
                viewBox="0 0 16 16"
                className="comment-icon"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
              <span className="ms-2">{abbrNum(post.numOfComments, 1)}</span>
            </ListGroup.Item>
            </Row>

            {showComments ? <Row><CommentList postId={post.id} /></Row> : null} 
            </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Post;
// className="me-auto"