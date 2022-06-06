import React from 'react'
import "./PostShare.scss"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const PostShare = () => {
  return (
    <div className="postShare">
        <img src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg" alt=''/>
    
        <div className='whatHappening'>
            <input type="text" placeholder="What is happening" />
        
        <div className="postOptions">
            <div className="option">
                <AddPhotoAlternateOutlinedIcon/>
                Photo
            </div>
            <div className="option">
                <VideoCameraBackOutlinedIcon/>
                Video
            </div>
            <div className="option">
                <AddLocationOutlinedIcon/>
                Location
            </div>
            <div className="option">
                <CalendarMonthOutlinedIcon/>
                Schedule
            </div>
        </div>
        </div>
    </div>
  )
}

export default PostShare