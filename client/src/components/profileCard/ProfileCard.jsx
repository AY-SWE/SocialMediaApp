import React from 'react'
import { useSelector } from 'react-redux'
//import Cover from '../../img/cover2.jpg'
import './ProfileCard.scss'
import { Link } from 'react-router-dom'
//src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg"

const ProfileCard = () => {
//const user = useSelector((state)=> state.authReducer.authData.user.existingUser);  
const user = useSelector((state)=>state.authReducer.authData.user);
const userExisting = user[Object.keys(user)[0]];
const userId = user[Object.keys(user)[0]]._id;
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="profileCard">
        <div className="profileImage">
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

                </div>
            <hr/>       
        </div>
        <span className='profileLink'>
            <Link to={`/profile/${userId}`} style={{textDecoration: "none", color:"inherit"}}>
            My Profile</Link>
            </span>
    </div>
  )
}

export default ProfileCard