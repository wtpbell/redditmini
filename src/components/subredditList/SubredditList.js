import { useEffect, useState } from "react";
import "./subredditList.css";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import {
  fetchSubreddits,
  selectAllSubreddits,
  getStatus,
} from "../../features/subreddit/subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate} from "react-router-dom";

const SubredditList = () => {
  const [showSubreddits, setShowSubreddits] = useState(true);
  const subreddits = useSelector(selectAllSubreddits);
  const status = useSelector(getStatus);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = () => {
    setShowSubreddits(!showSubreddits);
  };

  const subredditClick = (subreddit) => {
    navigate(`/subreddits/r/${subreddit}`)
  }

  useEffect(() => {
    console.log(location.pathname);
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <ListGroup className="mt-3 justify-content-center bg-neutral-background z-[2] box-border flex flex-col mt-0 mb-0 pt-xs xs:pt-md shrink-0 s:shrink w-full min-h-screen-without-header select-none" as="ul">
        <ListGroup.Item
          className="sideBar-home mb-2 d-flex justify-content-center"
          as="li"
          active
        >
          <Link to="/" style={{color:'white', textDecoration: 'none'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 15 15"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg>
          <span className="ms-2 fw-bold fs-4">Home</span>
          </Link>
        </ListGroup.Item>

        <ListGroup.Item
          className="my-2 mx-2"
          as="li"
          onClick={handleClick}
        >
          {
            <svg
              className={showSubreddits && status === 'succeeded' ? 'arrow-down' : 'arrow-up'}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          }
          <span className="text-uppercase fw-bold ms-2 fs-6 ">communities</span>
        </ListGroup.Item>
        

        {showSubreddits
          ? subreddits.map((subreddit) => (
              <Link to={`/subreddits/r/${subreddit.subreddit}`}>
              <ListGroup.Item 
                className="my-2 mx-2 d-flex "
                as="li"
                key={subreddit.id}
                onClick={subredditClick}
                action
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  class="bi bi-arrow-return-right"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                  />
                </svg>{" "}
                <Image src={subreddit.iconImg? subreddit.iconImg : subreddit.communityIcon} className="ms-2" style={{height:'2rem', width:'auto'}}/>
                <span 
                  className="ms-2 overflow-hidden" 
                  id={subreddit.subreddit}
                  
                >
                  {subreddit.subreddit} 
                </span>
                
              </ListGroup.Item>
              </Link>
            ))
          : null}
          
      </ListGroup>
      
    </>
  );
};

export default SubredditList;
