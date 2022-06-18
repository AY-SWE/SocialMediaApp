import React from 'react'
import { useSelector } from 'react-redux'
import Cover from '../../img/cover2.jpg'
import './ProfileCard.scss'
import { Link } from 'react-router-dom'
//src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg"

const ProfileCard = () => {
const user = useSelector((state)=> state.authReducer.authData.user.existingUser);  
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="profileCard">
        <div className="profileImage">
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

                </div>
            <hr/>       
        </div>
        <span className='profileLink'>
            <Link to={`/profile/${user._id}`} style={{textDecoration: "none", color:"inherit"}}>
            My Profile</Link>
            </span>
    </div>
  )
}

export default ProfileCard