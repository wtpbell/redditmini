import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSubreddits,
  selectAllSubreddits,
  getStatus,
  getError
} from '../../features/subreddit/subredditSlice';


const SubredditsInfo = ({subreddit}) => {
  // const subreddits = useSelector(selectAllSubreddits);
  // const status = useSelector(getStatus);
  // const dispatch = useDispatch();
  // const selectedSubreddit = subreddits.filter(target => target.id === subreddit.userId)

  // console.log(subreddits);
  // useEffect(() => {
  //   dispatch(fetchSubreddits());
  // }, [dispatch]);


  return (
    <>
     <Card>
        
     </Card>
    </>
  )
}

export default SubredditsInfo