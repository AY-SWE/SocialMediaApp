import React from 'react'
//import Cover from '../../img/cover2.jpg'
import './ProfileCard2.scss'
import { useSelector } from 'react-redux'

const ProfileCard2 = () => {
//const user = useSelector((state)=> state.authReducer.authData.user.existingUser);  
const user = useSelector((state)=>state.authReducer.authData.user);
const userExisting = user[Object.keys(user)[0]];
const userId = user[Object.keys(user)[0]]._id;

const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
const {posts, loading} = useSelector((state)=>state.postReducer);
  return (
    <div className="profileCard">
        <div className="profileImage2">
            <img src={userExisting.coverPic? serverPublic + userExisting.coverPic: serverPublic + "defaultCoverPic"} alt=''></img>
            <img src={userExisting.profilePic? serverPublic + userExisting.profilePic: serverPublic + "defaultProfilePic.png"} alt=''></img>
        </div>

        <div className="profileName">
            <span>{userExisting.firstname} {userExisting.lastname}</span>
            <span>{userExisting.worksAt? userExisting.worksAt: "Include your Profession"}</span>
        </div>

        <div className="followStatus">
            <hr/>
                <div>
                <div className="follow">
                    <span>{userExisting.followers.length}</span>
                    <span>Followers</span>
                </div>
                <div className="vert"></div>
                <div className="follow">
                    <span>{userExisting.followings.length}</span>
                    <span>Following</span>
                </div>
                <div className="vert"></div>
                <div className="follow">
                    <span>{posts.filter((post)=>post.userId===userId).length}</span>
                    <span>Posts</span>
                </div>

                </div>
            <hr/>       
        </div>

      </div>
  )
}

export default ProfileCard2