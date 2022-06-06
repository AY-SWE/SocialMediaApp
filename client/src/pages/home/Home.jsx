import React from 'react'
import PostSide from '../../components/postSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.scss';
//rafce
const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <PostSide/>
      <div className="rightSide">rightSide</div>
    </div> 
  )
}

export default Home