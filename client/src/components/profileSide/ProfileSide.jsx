import React from 'react'
import './ProfileSide.scss';
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSide