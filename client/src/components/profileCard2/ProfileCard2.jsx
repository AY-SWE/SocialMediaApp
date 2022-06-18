import React from 'react'
//import Cover from '../../img/cover2.jpg'
import './ProfileCard2.scss'
import { useSelector } from 'react-redux'

const ProfileCard2 = () => {
const user = useSelector((state)=> state.authReducer.authData.user.existingUser);  
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
const {posts, loading} = useSelector((state)=>state.postReducer);
  return (
    <div className="profileCard">
        <div className="profileImage2">
            <img src={user.coverPic? serverPublic + user.coverPic: serverPublic + "defaultCoverPic"} alt=''></img>
            <img src={user.profilePic? serverPublic + user.profilePic: serverPublic + "defaultProfilePic.png"} alt=''></img>
        </div>

        <div className="profileName">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt? user.worksAt: "Include your Profession"}</span>
        </div>

        <div className="followStatus">
            <hr/>
                <div>
                <div className="follow">
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>
                <div className="vert"></div>
                <div className="follow">
                    <span>{user.followings.length}</span>
                    <span>Following</span>
                </div>
                <div className="vert"></div>
                <div className="follow">
                    <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                    <span>Posts</span>
                </div>

                </div>
            <hr/>       
        </div>

      </div>
  )
}

export default ProfileCard2