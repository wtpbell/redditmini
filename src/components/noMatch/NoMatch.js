import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import errorImage from "../../images/404-Graphic.jpg"

const NoMatch = () => {
  return (
    <Container>
      <Image src={errorImage} />
    </Container>
  )
}

export default NoMatch