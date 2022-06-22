import React, {useEffect} from 'react'
import "./Chat.scss"
import LogoSearch from "../../components/logoSearch/LogoSearch"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/chatRequestApi'
import Conversation from '../../components/conversation/Conversation'
const Chat = () => {
    const [chats, setchats] = useState([]);
    const user = useSelector((state)=>state.authReducer.authData.user);
   const userExisting = user[Object.keys(user)[0]];
    const userId = user[Object.keys(user)[0]]._id;
    //console.log(userId);
    useEffect(() => {
        const getChats = async()=>{
            try{
                const {data} = await userChats(userId);
                setchats(data);
                //console.log(data);        //works
            }
            catch(err){
                console.log(err);
            }
        }
        getChats();
    },[user])   //getChats() called everytime user that's logged in has changed
  return (
    <div className="chat">
        <div className="leftSide">
            <LogoSearch/>
            <div className="chatContainer">
                <h2>Chats</h2>
                <div className="chatList">
                   {chats.map((chat)=> (
                    <div>
                        <Conversation data={chat} currentUserId={userId}/>
                    </div>
                   ))}
                </div>
            </div>
        </div>

        <div className="rightSide">
        </div>
    </div>
  )
}

export default Chat