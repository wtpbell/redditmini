import React from 'react'
import { useEffect } from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import {
    selectedFilter,
    filteredResult,
    selectedStatus,
    filterSubreddit
} from '../../features/filter/filterSlice';
import Post from '../postLists/Post';
import Filter from "../filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/esm/Spinner';


const Home = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectedFilter);
    const filteredResults = useSelector(filteredResult);
    const status = useSelector(selectedStatus);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (filter) => {
        if(filter != currentFilter) {
        navigate(`/posts/${filter}`)
        }
    }
    
    useEffect(() => {
        console.log(location.pathname);
        dispatch(filterSubreddit(currentFilter));
      }, [dispatch, currentFilter]);


  return (
    <>
      <Filter handleFilter={handleNavigation}/>
      {(currentFilter) && status === "succeeded" ? filteredResults.map((result, index) => (
                <Post post={result} key={index}/>
            )): <Spinner />}

      
    </>
  )
}

export default Home