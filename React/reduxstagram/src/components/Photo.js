import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {increment} from '../redux/index'


const Photo = (props) => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts[props.index]);

  function handleClickLikes() {
    dispatch(increment(props.index));
  }
  return (
    <div className="card">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="grid-photo" />
        </Link>
      <div className="card-photo-info">
      <p>{post.caption}</p>
      <button onClick={handleClickLikes}>♥{post.likes}</button>
      </div>
    </div>
  )
}


export default Photo;
