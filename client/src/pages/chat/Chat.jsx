import React from 'react'
import "./Chat.scss"
import LogoSearch from "../../components/logoSearch/LogoSearch"
const Chat = () => {
  return (
    <div className="chat">
        <div className="leftSide">
            <LogoSearch/>
            <div className="chatContainer">
                <h2>Chats</h2>
                <div className="chatList">
                    Conversations
                </div>
            </div>
        </div>

        <div className="rightSide">
        </div>
    </div>
  )
}

export default Chat