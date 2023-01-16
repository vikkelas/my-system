import React from 'react';
import {socket} from "../../config/web-socked";

const Chat = () => {
    const user = "sergey";
    const handleJoinChat = ()=>{
        socket.emit('join', {user},(error)=>{
            if(error) return alert(error);
        });
    }
    return (
        <div>
            Hello to chat!
            <button onClick={handleJoinChat}>
                Join
            </button>
        </div>
    );
};

export default Chat;