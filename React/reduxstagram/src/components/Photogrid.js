import React from 'react'
import {useSelector} from 'react-redux'
import Photo from './Photo'

const Photogrid = () => {
  const [posts, comments] = useSelector(state => [state.posts, state.comments]);

  return (
    <div className="photo-grid">
    {posts.map((post, index) => <Photo key={index} index={index}/>)}
    </div>
  )
}


export default Photogrid;
