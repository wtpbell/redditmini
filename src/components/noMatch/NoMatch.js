import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import errorImage from "../../images/404-Graphic.jpg"
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <Container>
      <Image src={errorImage} />
      <Link to='/'>Go to the home page</Link>
    </Container>
  )
}

export default NoMatch