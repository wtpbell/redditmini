import React from "react";
import Card from "react-bootstrap/Card";


const Comment = ({ comments }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          {comments.author} {comments.time}
        </Card.Header>
        <Card.Body>
          {comments.body}
        </Card.Body>
       
      </Card>
    </>
  );
};


export default Comment;
