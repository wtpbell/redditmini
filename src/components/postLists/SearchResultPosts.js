import React, { useEffect } from 'react'
import {
    searchSubreddits,
    searchOutcome,
    getStatus 
} from "../../features/search/searchSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import Post from './Post'

const SearchResultPosts = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchResults = useSelector(searchOutcome);
    const status = useSelector(getStatus);
    const { keyword } = useParams();

    
    useEffect(() => {
        console.log(location.pathname);
        dispatch(searchSubreddits(keyword))
    }, [dispatch, keyword])

    const result = searchResults.filter(outcome =>  outcome.title == keyword )
    console.log(searchResults);

  return (
    <>
        <h2>{keyword} search result...</h2>
        {result && status === "succeeded" ? searchResults.map(outcome => (    
        <Post post={outcome} key={outcome.id} /> 
        )) : <h4>Sorry I can't find anything..</h4>}
    </>
  )
}

export default SearchResultPosts