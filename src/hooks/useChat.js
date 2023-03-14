   import { useRef, useState, useEffect } from 'react';
   import { useNavigate } from 'react-router-dom';
   import { useSelector } from 'react-redux';
   import io from 'socket.io-client'
   import {v4 as uuidv4} from 'uuid'
   export const useChat = () => {
      const navigate = useNavigate();
      const [messages, setMessages] = useState([]);
      const [users, setUsers] = useState([]);
      const { user } = useSelector(state=>state.auth);
      
      // useRef() используется не только для получения доступа к DOM-элементам,
      // но и для хранения любых мутирующих значений в течение всего жизненного цикла компонента
      const socketRef = useRef(null);

      useEffect(()=>{
         socketRef.current = io(`${process.env.PUBLIC_URL}+/chat`,{
            auth: {
                tokenChat: user.secretIdChat,
            }
        })

      //   обработка ошибки на сервере
        socketRef.current.on("connect_error", (err) => {
         navigate("/error404")
         console.log(err.message); // prints the message associated with the error
       });

       socketRef.current.on("disconnect", () => {
         console.log('disconected'); // undefined
       });

       socketRef.current.on("connect", ()=>{console.log('connected')});
    
       socketRef.current.on('connectedAdmin',(msg)=>console.log(msg));

       socketRef.current.on('msgToClient', (msg)=>{
         console.log(msg)
      })
      }, [])

      
      const sendMessage = (msg)=> socketRef.current.emit('msgToServer', JSON.stringify({secretIdChat: user.secretIdChat, message: msg}))
   
   }