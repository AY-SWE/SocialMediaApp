import React from 'react'
import "./InfoCard.scss"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const InfoCard = () => {
  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <EditOutlinedIcon/>
        </div>
         
         <div className="info">
             <span><b>Status </b></span>
             <span>in Relationship</span>
         </div>

         <div className="info">
             <span><b>Lives In </b></span>
             <span>New York</span>
         </div>

         <div className="info">
             <span><b>Works at </b></span>
             <span>New York</span>
         </div>

         <button className='logoutButton'>Logout</button>
    </div>
  )
}

export default InfoCard