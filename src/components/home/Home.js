import React from 'react'
import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate, useLocation} from "react-router-dom";
import {
    selectedFilter,
    filteredResult,
    selectStatus,
    filterSubreddit
} from '../../features/filter/filterSlice';
import Post from '../postLists/Post';
import Filter from "../filter/Filter";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectedFilter);
    const filteredResults = useSelector(filteredResult);
    const navigate = useNavigate();
    const location = useLocation();
    const { filter } = useParams();

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
      {(currentFilter) ? filteredResults.map((result, index) => (
                <Post post={result} key={index}/>
            )): <p>Sorry Nothing to Show</p>}

    {/* <h1>hello</h1> */}
      
    </>
  )
}

export default Home