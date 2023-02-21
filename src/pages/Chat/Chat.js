import React, {useState} from 'react';
import io from "socket.io-client";

const Chat = () => {
    const socket = io('http://localhost:5050/chat',{
        auth: {
            tokenChat: 'chatId123'
        }
    })
    // socket.on("connect_error", (err) => {
    //     navigate("/error404")
    //     console.log(err.message); // prints the message associated with the error
    //   });

    
    const [input, setInput] = useState('');
    
    // // const sendMessage = (e) => {
    // //     e.preventDefault()
    // //     ws.send(JSON.stringify({secretIdChat: user.secretIdChat, message: input}))
    // // }
    socket.on("disconnect", () => {
        console.log('disconected'); // undefined
      });

    socket.on("connect", ()=>{console.log('connected')});

    socket.on('connectedAdmin',(msg)=>console.log(msg))
    return (
        <div>
            <div>
                <div>
                    <h2>Сообщения</h2>
                    
                </div>
                <form style={{display: "flex", justifyContent: 'center', marginTop: '100px'}}>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <button>
                        Join
                    </button>
                </form>
            </div>            
        </div>
        
    );
};

export default Chat;