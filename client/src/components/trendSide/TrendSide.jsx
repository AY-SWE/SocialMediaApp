import React from 'react'
import "./TrendSide.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TrendCard from '../trendCard/TrendCard';
const TrendSide = () => {
  return (
    <div className='trendSide'>
        <div className="navIcons">
        <HomeOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <AddCommentOutlinedIcon/>
        <SettingsOutlinedIcon/>
        </div>

        <TrendCard/>
    </div>
  )
}

export default TrendSide