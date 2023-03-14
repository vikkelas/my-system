import React, {useState} from 'react';
import {useChat} from '../../hooks/useChat'
const Chat = () => {
    const chat = useChat();
    const [input, setInput] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault()
        chat.sendMessage('sadasdadasdas')
    }
   
   
    return (
        <div>
            <div>
                <div>
                    <h2>Сообщения</h2>

                </div>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                <button onClick={sendMessage}>
                    Join
                </button>
            </div>
        </div>

    );
};

export default Chat;
