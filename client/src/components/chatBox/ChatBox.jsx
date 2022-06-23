import React, {useState, useEffect} from 'react'
import { getUser } from '../../api/userRequestApi';

const ChatBox = ({chat, currentUser}) => {      //currentChat and currentUser passed here from Chat.jsx
    const [userData, setuserData] = useState(null);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    
    //getting data for header
    useEffect(() => {
        const userId = chat?.members?.find((id)=> id !== currentUser)
        const getUserData = async() => {
            try{
                const {data} = await getUser(userId);
                setuserData(data);
                console.log(data); //successfully returns the clicked user in left side chat menu
            }
            catch(err){
                console.log(err);
            }
        } 
        if(chat !== null)
            getUserData();  
    },[chat, currentUser])      //whenever these two dependecies change, useEffect will render

  return (
    <>
        <div className="chatboxContainer">
            <>
            <div className="chatBoxHeader">
                <div className="follower">
                    <div>
                       
                        <img src={userData?.profilePic? serverPublic + userData.profilePic: serverPublic + "defaultProfilePic.png"} 
                            alt="" 
                            className='followerImg'/>

                        <div className="followerName">
                            <span>{userData?.firstname} {userData?.lastname}</span>
                        </div>
                    </div>
                </div>
            </div>
            </>
        </div>
    </>
  )
}

export default ChatBox