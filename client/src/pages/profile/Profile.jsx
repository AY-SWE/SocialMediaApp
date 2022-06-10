import React from 'react'
import "./Profile.scss"
import ProfilePageLeft from '../../components/profilePageLeft/ProfilePageLeft'
import PostSide from '../../components/postSide/PostSide'
import ProfileCard2 from '../../components/profileCard2/ProfileCard2'
import TrendSide from '../../components/trendSide/TrendSide'
const Profile = () => {
  return (
    <div className="profile">
        <ProfilePageLeft/>
        <div className="profilePageCenter">
            <ProfileCard2/>
            <PostSide/>
        </div>

        <TrendSide/>
    </div>
  )
}

export default Profile