import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Post from "./Post";
import Filter from "../filter/Filter";
import {
  filterSubreddit,
  filteredResult,
} from "../../features/filter/filterSlice";
import Container from "react-bootstrap/esm/Container";
import {
  fetchComments,
  getComments,
  getStatus
} from "../../features/comments/commentSlice"


const PostLists = () => {
  // const [clickSubreddit, setClickSubreddit] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const { filter} = useParams();
  const dispatch = useDispatch();
  const filteredResults = useSelector(filteredResult);

  const handleNavigation = (filter) => {
    navigate(`/posts/${filter}`)
  }

  useEffect(() => {
    console.log(location.pathname);
    dispatch(filterSubreddit(filter));
  }, [dispatch, filter]);
  
  console.log(filteredResults);
  return (
    <>
    
      <Filter handleFilter={handleNavigation}/>
      {(filter) ? filteredResults.map((result) => (
                <Post post={result} />
            )): null}

    </>
  );
};

export default PostLists;
