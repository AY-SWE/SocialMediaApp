import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.scss';
//rafce
const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <div className="postSide">post</div>
      <div className="rightSide">rightSide</div>
    </div> 
  )
}

export default Home