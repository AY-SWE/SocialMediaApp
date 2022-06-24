import React, {useState, useEffect} from 'react'
import { createMessage, getMessasges } from '../../api/messageRequestApi';
import { getUser } from '../../api/userRequestApi';
import "./ChatBox.scss"
import {format} from "timeago.js";
import InputEmoji from "react-input-emoji"

const ChatBox = ({chat, currentUser}) => {      //currentChat and currentUser passed here from Chat.jsx
    const [userData, setuserData] = useState(null);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");       //for input 
    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }
    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id
        }

        //send message to database
        try{
            const {data} = await createMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");      //after clicking send, input space will become blank again
        }
        catch(err){
            console.log(err);
        }
    }
    //getting data for header
    useEffect(() => {
        const userId = chat?.members?.find((id)=> id !== currentUser)
        const getUserData = async() => {
            try{
                const {data} = await getUser(userId);
                setuserData(data);
                //console.log(data); //successfully returns the clicked user in left side chat menu
            }
            catch(err){
                console.log(err);
            }
        } 
        if(chat !== null)
            getUserData();  
    },[chat, currentUser])      //whenever these two dependecies change, useEffect will render

    //fetching data for messages 
    useEffect(() => {
        const getMessages = async() => {
            try{
                const {data} = await getMessasges(chat._id);
                setMessages(data);
                console.log(data); //successfully returns the clicked user in left side chat menu
            }
            catch(err){
                console.log(err);
            }
        } 
        if(chat !== null)
            getMessages();  
    },[chat])   

  return (
    <>
        <div className="chatboxContainer">
            {chat? (
                <>
                <div className="chatBoxHeader">
                    <div className="follower">
                        <div>
                        
                            <img src={userData?.profilePic? serverPublic + userData.profilePic: serverPublic + "defaultProfilePic.png"} 
                                alt="" 
                                className='followerImg'/>

                            <div className="followerName">
                                <span>{userData?.firstname} {userData?.lastname}</span>
                                <hr style={{width:"85%", border: "0.1px solid #eeeeee" , marginTop: "20px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* chatBox MEssages */}
                <div className="chatBody">
                    {messages.map((message)=> {
                        return(
                        <>
                        <div className={message.senderId === currentUser? "message own": "message"}>
                            <span>{message.text}</span>
                            <span>{format(message.createdAt)}</span>
                        </div>
                        </>)
                    })}
                </div>

                {/* chat sender */}
                <div className="chatSender">
                    <div className='addSign'>+</div>       
                    <InputEmoji
                    value={newMessage}
                    onChange = {handleChange}/> 

                    <button className="chatBoxSendButton" onClick = {handleSend}>Send</button>
                    <input
                        type="file"
                        name=""
                        id=""
                        style={{ display: "none" }}
                        //ref={imageRef}
                    />
                </div>
            </>
            ) : (<span className='chatboxEmptyMessage'>Tap on a friend to open/start conversation!...</span>)}
            
        </div>
    </>
  )
}

export default ChatBox