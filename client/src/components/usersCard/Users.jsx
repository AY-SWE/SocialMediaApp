import React from 'react'
import { useSelector } from 'react-redux';
const Users = ({follower}) => {
    const user = useSelector((state)=>state.authReducer.authData.user);
    const userExisting = user[Object.keys(user)[0]];
    const userId = user[Object.keys(user)[0]]._id;
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="follower"> 
          <div>
            <img src={follower.profilePic? serverPublic + follower.profilePic: serverPublic + "defaultProfilePic.png"} alt="" className='followerImg'/>
            <div className="name">
              <span>{follower.firstname} {follower.lastname}</span>
              <span>@{follower.username}</span>
            </div>
          </div>

          <button className='button-follower'>
              Follow
          </button>
        </div>
        
  )
}

export default Users