import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    fetchComments,
    getComments,
    getStatus
  } from "../../features/comments/commentSlice"
import Comment from './Comment';

const CommentList = ({postId}) => {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const status = useSelector(getStatus);

    useEffect(() => {
        dispatch(fetchComments(postId))
    },[dispatch,(postId)])


  return (
    <>
        {comments && status === 'succeeded'? comments.map(comment => (
            <Comment comments={comment} postId={postId} />
        )): null}
    </>
  )
}

export default CommentList