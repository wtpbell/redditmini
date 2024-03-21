import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./filter.css";
import { filteredResult } from "../../features/filter/filterSlice";

const Filter = ({handleFilter}) => {
  const [filter, setFilter] = useState('')

  const onClick = e =>{
    e.preventDefault();
    handleFilter(e.currentTarget.id);
    setFilter(prev => prev, e.currentTarget.id)
  }

  return (
    <>
      <Container className="mt-3">
        <Nav fill variant="tabs" defaultActiveKey={`/posts/${filter}`}>
          <Nav.Item >
            <Nav.Link href='/posts/hot' className="filter-btn fs-5" id='hot' onClick={onClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-fire"
                viewBox="0 0 16 16"
                className="me-2"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
              Hot
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='/posts/new' className="filter-btn fs-5" id='new' onClick={onClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-patch-check-fill"
                viewBox="0 0 16 16"
                className="me-2"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              New
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='/posts/top' className="filter-btn fs-5" id='top' onClick={onClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
                className="me-2"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              Top
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default Filter;
