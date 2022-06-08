import React from 'react'
import "./Posts.scss"
import { PostsData } from '../../data/post'
import Post from '../post/Post'
const Posts = () => {
  return (
    <div className="posts">
        {PostsData.map((post,id)=> {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts