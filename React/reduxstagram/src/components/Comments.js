import React from 'react'
import {useRef} from 'react';
import {useDispatch} from 'react-redux'
import {addComment} from '../redux/index'

const SingleComment = (props) => {
  return (
    <p>
      <strong>{props.comment.user}</strong><span>{props.comment.text}</span>
      <button>x</button>
    </p>
  )

};

const Comments = (props) => {
  const commentFormRef = useRef();
  const authorRef = useRef();
  const commentRef = useRef();

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addComment(
      props.postId,
      authorRef.current.value,
      commentRef.current.value
    ))
    authorRef.current.value = "";
    commentRef.current.value = "";

  }

  return (
    <div className="comments">
      {props.comments.map((el, i) => <SingleComment key={i} i={i} comment={el}/>)}
      <form ref={commentFormRef} className="comment-form" onSubmit={handleSubmit}>
        <input type="text" ref={authorRef} placeholder="author" />
        <input type="text" ref={commentRef} placeholder="comment" />
        <input type="submit" hidden/>
      </form>
    </div>
  )

};

export default Comments;
