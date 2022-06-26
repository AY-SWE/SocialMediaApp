import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userActions';
import { useState, useEffect } from 'react';
const Users = ({follower}) => {         //Users is actually User, each single follower in followerCard
  const userauthData = useSelector((state)=>state.authReducer.authData);
    const user = useSelector((state)=>state.authReducer.authData.user);
    const userExisting = user[Object.keys(user)[0]];
    const userId = user[Object.keys(user)[0]]._id;
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [following, setFollowing] = useState(follower.followers.includes(userId));  

const dispatch = useDispatch()
const handleFollow = () => {
    following?
    dispatch(unfollowUser(follower._id, userExisting)):
    dispatch(followUser(follower._id, userExisting))
    
    setFollowing((prev)=> !prev)
}

  return (
    <div className="follower"> 
          <div>
            <img src={follower.profilePic? serverPublic + follower.profilePic: serverPublic + "defaultProfilePic.png"} alt="" className='followerImg'/>
            <div className="name">
              <span>{follower.firstname} {follower.lastname}</span>
              <span>@{follower.username}</span>
            </div>
          </div>

          <button className={following? 'button-Unfollower': 'button-follower'} onClick={handleFollow}>
              {following? "Unfollow": "Follow"}
          </button>
        </div>
        
  )
}

export default Users