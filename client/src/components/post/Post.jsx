import React from 'react'
import Comment from '../../img/comment2.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import "./Post.scss"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likeDislikePost } from '../../api/postRequestApi'

const Post = ({data}) => {
  //const user = useSelector((state)=>state.authReducer.authData.user.existingUser);
  const user = useSelector((state)=>state.authReducer.authData.user);
const userExisting = user[Object.keys(user)[0]];
const userId = user[Object.keys(user)[0]]._id;
  const [liked, setliked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
      setliked((prev) => !prev);
      likeDislikePost(data._id, userId)
      liked? setLikes((prev) => prev - 1): setLikes((prev) => prev + 1)
  }

  return (
    <div className="post">
      <img src={data.img? process.env.REACT_APP_PUBLIC_FOLDER + data.img: ""} alt=""/>

      <div className="postReact">
          <img src= {liked? Heart: NotLike} alt="" onClick={handleLike}/>
          <img src= {Comment} alt=""/>
          <img src= {Share} alt=""/>
      </div>

      <span style={{color:"black", fontSize:"13px"}}>{likes} Likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.description}</span>
      </div>
    </div>
  )
}

export default Post