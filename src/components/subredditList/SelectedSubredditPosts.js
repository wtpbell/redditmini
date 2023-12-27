import "./selectedSubredditPosts.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  selectedSubreddits,
  getSelectedSubreddits,
  subredditInfo,
  getSubredditInfo,
  getStatus,
} from "../../features/subreddit/subredditSlice";
import Post from "../postLists/Post";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import formatImage from "../../utilities/formatImage";
import abbrNum from "../../utilities/abbrNum";
import Spinner from "react-bootstrap/esm/Spinner";


const SelectedSubredditPosts = () => {
  const location = useLocation();
  const selectedSubreddit = useSelector(getSelectedSubreddits);
  const subredditDetails = useSelector(getSubredditInfo);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const { subreddit } = useParams();


  useEffect(() => {
    console.log(location.pathname);
    dispatch(selectedSubreddits(subreddit));
    dispatch(subredditInfo(subreddit));
  }, [dispatch, subreddit]);

  const community = selectedSubreddit.find(
    (target) => target.subreddit === subreddit
  );

  const bannerImage = subredditDetails.banner_background_image
    ? formatImage(subredditDetails.banner_background_image)
    : subredditDetails.banner_img;

  

  return (
    <>
      <Container fluid>
        <Row
          className="banner"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <Image
            className="icon-img"
            src={
              subredditDetails.icon_img
                ? subredditDetails.icon_img
                : formatImage(subredditDetails.community_icon)
            }
            style={{ height: "7rem", width: "auto" }}
          />
        </Row>

        <Row className="title-row">
          <Col>
            <h5 className="title">{subredditDetails.title}</h5>
            <h6 className="name">{subredditDetails.display_name_prefixed} </h6>
          </Col>
        </Row>
        <Row className="flex-nowrap">
          <Col sm={12} lg={8}>
            {status === 'loading' && <Spinner />}
            {community && status === "succeeded"
              ? selectedSubreddit.map((target) => (
                  <Post post={target} key={target.id} />
                ))
              : null}
          </Col>
          <Col lg={4} className="d-sm-none d-md-none d-lg-block mt-3">
            <Card>
              <Card.Header>About Community</Card.Header>
              <Card.Body>
                <Card.Text className="text">
                  {subredditDetails.public_description}
                </Card.Text>
                {/* <Card.Text>{ `Created ${formatedDate(subredditDetails.created_utc)}`}</Card.Text> */}
              </Card.Body>
              <ListGroup className="text-center " flush horizontal >
                <ListGroup.Item className="member-figure flex-fill">
                  {abbrNum(subredditDetails.subscribers, 1)}
                  <br></br>
                  subscribers
                </ListGroup.Item>
                <ListGroup.Item className="member-figure flex-fill">
                  {abbrNum(subredditDetails.accounts_active, 1)}
                  <br></br>
                  active users
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectedSubredditPosts;
