import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../header/Header";
import SubredditList from "../subredditsSideBar/SubredditList";
import Filter from "../filter/Filter";
import Post from "../postLists/Post";
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <Outlet />
  )
}

export default Home