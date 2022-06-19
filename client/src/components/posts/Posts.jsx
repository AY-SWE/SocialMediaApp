import React, {useEffect} from 'react'
import "./Posts.scss"
//import { PostsData } from '../../data/post'   //hardcoded data
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePost } from '../../actions/postActions'
import { useParams } from 'react-router-dom';

const Posts = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.authReducer.authData.user);
  const userId = user[Object.keys(user)[0]]._id;
  console.log(" Posts.jsx console log user ida:  "+ userId);
  let {posts, loading} = useSelector((state)=>state.postReducer);
  const params = useParams();
//TimeLine posts- in profile page, we should only see our own posts, but in home page, we should see our + our followings' posts

  useEffect(() => {
    dispatch(getTimelinePost(userId))
  }, [])

  if(!posts)
    return "Upload and relive your memories!"
  if(params.id){
    posts = posts.filter((post)=> post.userId === params.id)
  }
  return (
    <div className="posts">
        {loading? "Updating Timeline...": 
        posts.map((post,id)=> {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts