import React from 'react'
import Photo from './Photo';
import Comments from './Comments'
import {useSelector} from 'react-redux';



const Single = (props) => {
  const posts = useSelector(state => state.posts);
  const path = props.location.pathname.split("/");
  const postId = path[path.length - 1];
  const comments = useSelector(state => state.comments);
  const postComments = comments[postId] || [];


  const index = posts.findIndex(post => post.code === postId);

  return (
    <div className="single-photo">
      <Photo index={index}/>
      <Comments postId={postId} comments={postComments}/>
    </div>
  )
}


export default Single;
