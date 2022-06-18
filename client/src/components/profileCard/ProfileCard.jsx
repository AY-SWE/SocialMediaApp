import React from 'react'
import { useSelector } from 'react-redux'
import Cover from '../../img/cover2.jpg'
import './ProfileCard.scss'
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
            <span>Anya Forger</span>
            <span>World Destroyer</span>
        </div>

        <div className="followStatus">
            <hr/>
                <div>
                <div className="follow">
                    <span>888,888</span>
                    <span>Followers</span>
                </div>
                <div className="vert"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Following</span>
                </div>

                </div>
            <hr/>       
        </div>

        <span className='profileLink'>My Profile</span>
    </div>
  )
}

export default ProfileCard