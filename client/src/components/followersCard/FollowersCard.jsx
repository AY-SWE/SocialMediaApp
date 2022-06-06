import React from 'react'
import { Followers } from '../../data/Followers'
import "./FollowersCard.scss"
const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
    
      {Followers.map((follower, id) => {
      return (
        <div className="follower">
          <div>
            <img src={follower.img} alt="" className='followerImg'/>
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>

          <button className='button-follower'>
              Follow
          </button>
        </div>
        )
      })}
    </div>
  )
}

export default FollowersCard