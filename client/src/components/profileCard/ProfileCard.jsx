import React from 'react'
import Cover from '../../img/cover2.jpg'
import './ProfileCard.scss'

const ProfileCard = () => {
  return (
    <div className="profileCard">
        <div className="profileImage">
            <img src={Cover} alt=''></img>
            <img src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg" alt=''></img>
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