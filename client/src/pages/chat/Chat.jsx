import React, {useEffect} from 'react'
import "./Chat.scss"
import LogoSearch from "../../components/logoSearch/LogoSearch"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/chatRequestApi'
import Conversation from '../../components/conversation/Conversation'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBox from '../../components/chatBox/ChatBox'
import {io} from "socket.io-client"
import { useRef } from 'react'

const Chat = () => {
    const [chats, setchats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const user = useSelector((state)=>state.authReducer.authData.user);
   const userExisting = user[Object.keys(user)[0]];
    const userId = user[Object.keys(user)[0]]._id;
    //console.log(userId);
    const socket = useRef();
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", userId);
        socket.current.on("get-user", (users) => {
          setOnlineUsers(users);
          console.log(users);
        });
      }, [user]);

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
                    <div onClick={()=>setCurrentChat(chat)}>
                        <Conversation data={chat} currentUserId={userId}/>
                        <hr style={{width:"85%", border: "0.1px solid #eeeeee"}}/>
                    </div>
                   ))}
                </div>
            </div>
        </div>

        <div className="rightSide">
            <div className="navIcons">
                <Link to="../home">
                <HomeOutlinedIcon />
                </Link>
                <NotificationsNoneOutlinedIcon/>
                <Link to= "../chat">
                <ChatBubbleOutlineOutlinedIcon />
                </Link>
                <SettingsOutlinedIcon/>
            </div>

            {/* chat body */}
            <ChatBox chat ={currentChat} currentUser ={userId}/>
        </div>
    </div>
  )
}

export default Chat