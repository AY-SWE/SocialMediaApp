import React from 'react'
import PostSide from '../../components/postSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.scss';
import TrendSide from '../../components/trendSide/TrendSide';
//rafce
const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <PostSide/>
      <TrendSide/>
    </div> 
  )
}

export default Home