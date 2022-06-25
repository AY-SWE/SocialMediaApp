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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch} from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const TrendSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [hover, setHover] = useState(false);    //for nav icons
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleMenuClose = () => {
  setAnchorEl(null);
};

const handleLogout = () => {
  dispatch(logoutUser())
}

const menu = 
        <Menu 
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout} style={{fontWeight:"bold", fontSize:"14px"}}>Logout</MenuItem>
        </Menu>        

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
        <SettingsOutlinedIcon onClick={handleProfileMenuOpen}/>
        {menu}
        
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