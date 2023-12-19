
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import {
  selectedSubreddits,
  getSelectedSubreddits,
  getStatus,
  fetchSubreddits,
} from "../../features/subreddit/subredditSlice";
import Post from "../postLists/Post";
import SubredditList from "./SubredditList";

const SelectedSubredditPosts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSubreddit = useSelector(getSelectedSubreddits);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const {subreddit} = useParams();

  useEffect(() => {
    console.log(location.pathname);
    dispatch(selectedSubreddits(subreddit));
  }, [dispatch, subreddit]);

  const community = selectedSubreddit.find(target => target.subreddit === subreddit);


  return (
    <>
        {community && status === 'succeeded' ? selectedSubreddit.map(target => (
            <Post post={target} key={target.id} />
        )) : null}
    </>
  );
};

export default SelectedSubredditPosts;
