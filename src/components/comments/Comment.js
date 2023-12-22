import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
