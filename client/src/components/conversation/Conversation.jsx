import React,{useEffect, useState} from 'react'
import { getUser } from '../../api/userRequestApi';
//import "./Conversation.scss"      //styling done in Chat.jsx

const Conversation = ({data, currentUserId}) => {
    const [userData, setuserData] = useState(null);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    useEffect(() => {
        const userId = data.members.find((id)=> id !== currentUserId)
       // console.log(userId);   //filtered id's successfully displayed
        const getUserData = async() => {
            try{
                const {data} = await getUser(userId);
            setuserData(data);
            //console.log(data); works
            }
            catch(err){
                console.log(err);
            }
        } 
        getUserData();
    }, []);
  return (
    <div className="followerConversation">
        <div>
            <div className="onlineDot">
            </div>
            <img src={userData?.profilePic? serverPublic + userData.profilePic: serverPublic + "defaultProfilePic.png"} 
                alt="" 
                className='followerImg'/>

            <div className="followerName">
                <span>{userData?.firstname} {userData?.lastname}</span>
            </div>
        </div>
    </div>
  )
}

export default Conversation