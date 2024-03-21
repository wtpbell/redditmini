import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Post from "./Post";
import Filter from "../filter/Filter";
import {
  filterSubreddit,
  filteredResult,
  selectedStatus
} from "../../features/filter/filterSlice";
import Spinner from "react-bootstrap/esm/Spinner";


const PostLists = () => {
  // const [clickSubreddit, setClickSubreddit] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const { filter } = useParams();
  const dispatch = useDispatch();
  const filteredResults = useSelector(filteredResult);
  const status = useSelector(selectedStatus);
 

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
      {status === 'loading' && <Spinner />}
      {(filter) ? filteredResults.map((result) => (
                <Post post={result} />
            )): null}

    </>
  );
};

export default PostLists;
