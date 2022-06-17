import React, {useEffect} from 'react'
import "./Posts.scss"
//import { PostsData } from '../../data/post'   //hardcoded data
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePost } from '../../actions/postActions'

const Posts = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.authReducer.authData.user.existingUser);
  //console.log(user._id);
  const {posts, loading} = useSelector((state)=>state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePost(user._id))
  }, [])
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