import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Post from "./Post";
import Filter from "../filter/Filter";
import {
  filterSubreddit,
  selectedFilter,
  filteredResult,
  selectedStatus,
  changeFilter
} from "../../features/filter/filterSlice";

const PostLists = () => {
  // const [keyword, setKeyword] = useState('hot')
  const navigate = useNavigate();
  const location = useLocation();
  const { filter } = useParams();
  const dispatch = useDispatch();
  const getFilter = useSelector(selectedFilter);
  const status = useSelector(selectedStatus);
  const filteredResults = useSelector(filteredResult);

  
  const handleNavigation = (filter) => {
    navigate(`/posts/${filter}`)
  }

  useEffect(() => {
    console.log(location.pathname);
    dispatch(filterSubreddit(filter));
  }, [dispatch, filter]);
  
  // console.log(filteredResults);
  return (
    <>
      <Filter handleFilter={handleNavigation} filter={filter}/>
      {(filter) ? filteredResults.map((result, index) => (
                <Post post={result} key={index}/>
            )): <p>Sorry Nothing to Show</p>}
      
    </>
  );
};

export default PostLists;
