import React from 'react'
import "./TrendSide.scss"
import {useState} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';
import { Link } from 'react-router-dom';

const TrendSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='trendSide'>
        <div className="navIcons">
        <Link to="../home">
          <HomeOutlinedIcon />
        </Link>
        <NotificationsNoneOutlinedIcon/>
        <AddCommentOutlinedIcon/>
        <SettingsOutlinedIcon/>
        </div>

        <TrendCard/>

        <button className='trendSideButton' onClick={()=> setModalOpened(true)}>
          Create Trend
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default TrendSide