import React from 'react'
import Comment from '../../img/comment2.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import "./Post.scss"
const Post = ({data}) => {
  return (
    <div className="post">
      <img src={data.img} alt=""/>

      <div className="postReact">
          <img src= {data.liked? Heart: NotLike} alt=""/>
          <img src= {Comment} alt=""/>
          <img src= {Share} alt=""/>
      </div>

      <span style={{color:"black", fontSize:"13px"}}>{data.likes} Likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post