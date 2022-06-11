import React from 'react'
import {useState} from 'react'
import "./InfoCard.scss"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditInfoModal from '../EditInfoModal/EditInfoModal';
const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <EditOutlinedIcon onClick={()=> setModalOpened(true)}/>
            <EditInfoModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
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