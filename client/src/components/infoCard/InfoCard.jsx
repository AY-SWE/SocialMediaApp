import React from 'react'
import {useState, useEffect} from 'react'
import "./InfoCard.scss"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditInfoModal from '../EditInfoModal/EditInfoModal';
import { useDispatch , useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import * as userApi from "../../api/userRequestApi"
import { logoutUser } from '../../actions/authActions';

const InfoCard = () => {

const [modalOpened, setModalOpened] = useState(false);
const dispatch = useDispatch();
const params = useParams();
const profileUserId = params.id;
const [profileUser, setprofileUser] = useState({});
const user = useSelector((state)=>state.authReducer.authData.user);
const userExisting = user[Object.keys(user)[0]];
const userId = user[Object.keys(user)[0]]._id;
const handleLogout = () => {
    dispatch(logoutUser())
}


useEffect(() => {
    const getProfileUser = async() => {
        if(profileUserId === userId){
            setprofileUser(userExisting)
            //console.log("if: InfoCard fetching user: ")
            //console.log(profileUser)
        }

        else{
            const profileUser = await userApi.getUser(profileUserId)
            setprofileUser(profileUser)
            //console.log("else: InfoCard fetching user: ")
            //console.log(profileUser)
        }
    }
    getProfileUser();
},[userExisting])   //giving it a dependency will prevent it from rendering infinite times, 
  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Profile Info</h4>
            {userId === profileUserId? (  
            <div>
            <EditOutlinedIcon onClick={()=> setModalOpened(true)}/>
            <EditInfoModal modalOpened={modalOpened} setModalOpened={setModalOpened} data = {userExisting}/>
            </div>): ("")}
    
         </div> 
         
         <div className="info">
             <span><b>Status: </b></span>
             <span>{userExisting.relationship}</span>
         </div>

         <div className="info">
             <span><b>Lives In: </b></span>
             <span>{userExisting.livesIn}</span>
         </div>

         <div className="info">
             <span><b>Works at: </b></span>
             <span>{userExisting.worksAt}</span>
         </div>

         <button className='logoutButton' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard