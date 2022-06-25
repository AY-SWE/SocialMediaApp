import React from 'react'
import "./TrendSide.scss"
import {useState} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';
import { Link } from 'react-router-dom';

const TrendSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [hover, setHover] = useState(false);    //for nav icons

  return (
    <div className='trendSide'>
        <div className="navIcons">
        <Link to="../home" 
        onMouseEnter={()=>{
        setHover(true);}}
         onMouseLeave={()=>{
          setHover(false);
        }} 
        style={{
          ...(hover ? {color:"var(--navIconHover)"} : {color:"black"})
        }}>
          <HomeOutlinedIcon />
        </Link>
        <NotificationsNoneOutlinedIcon
        />
        <Link to= "../chat">
          <ChatBubbleOutlineOutlinedIcon />
        </Link>
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