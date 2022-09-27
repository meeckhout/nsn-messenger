import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import {useEffect, useState, useRef} from 'react';
import ReactTimeAgo from 'react-time-ago';
import { v4 as uuid } from 'uuid';

const Chat = () => {

    const socket = useRef();
    const scrollRef = useRef();

    const [messageReceived, setMessageReceived] = useState("");

    const [sender, setSender] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const [sentMessage, setSentMessage] = useState();

    // Create socket.io connection to backend server
    useEffect(() => {

        socket.current = io.connect("http://localhost:3001");
        // console.log("chicken");

        socket.current.emit("add_user", localStorage.getItem(process.env.REACT_APP_KEY));
        // console.log("house");

        socket.current.on("receive_message", (data) => {
            console.log(data);
            setMessageReceived({
                id: data.id,
                sender: data.sender,
                message: data.message,
                sent_at: data.sent_at,
            });
        });
        // console.log("farm");
    }, []);

    // Add instant message to chatHistory
    useEffect(() => {
        messageReceived && setChatHistory((prev) => [...prev, messageReceived]);
      }, [messageReceived]);

    // Fetch chatbox data from database
    useEffect(() => {
        const getChatHistory = () => {
            axios.get("http://localhost:3001/chat", {
                params: {
                    sender: localStorage.getItem(process.env.REACT_APP_KEY),
                    receiver: localStorage.getItem(process.env.REACT_APP_CHAT)
                }
            })
            .then(response => {
                // console.log(response.data);
                console.log(response.data.chatHistory);
                // console.log(response.data.sender[0].nickname, response.data.sender[0].email);
                setSender(response.data.sender);
                setReceiver(response.data.receiver);
                setChatHistory(response.data.chatHistory);
            })
        };
        getChatHistory();
    },[]);
    // Empty brackets trigger request/rendering only when page is loaded

    // Send message: store in DB & emit via socket
    const sendMessage = async (event) => {
        event.preventDefault();
        //Emit mew message via socket
        const unique_id = uuid();
        const small_id = unique_id.slice(0,8)
        socket.current.emit("new_message", {
            id: small_id,
            sender: localStorage.getItem(process.env.REACT_APP_KEY),
            receiver: localStorage.getItem(process.env.REACT_APP_CHAT),
            message: sentMessage,
            sent_at: Date.now()
        });

        // Send message to DB
        try {
            await axios.post("http://localhost:3001/sendMessage", {
                sender: localStorage.getItem(process.env.REACT_APP_KEY),
                members: [localStorage.getItem(process.env.REACT_APP_KEY), localStorage.getItem(process.env.REACT_APP_CHAT)],
                message: sentMessage
            });
            setSentMessage("");
        } catch (error) {
            if (error.response) {
                setErrMsg(error.response.data.msg);
            }
        }
    }

    // Add scroll bar to chat history div
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    },[chatHistory]);

    const handleChange = (event) => {
        setSentMessage(event.target.value);
    };

    return (
        <div>
            <h1>Chatbox</h1>

            {/* Chat history */}
            <h2>Chat history</h2>
            {(chatHistory.length > 0) ?
            (<div style={{height: "200px", overflow: "auto", margin: "1rem", padding: "1rem", border: "1px solid black"}}>
                    {chatHistory.map((message) => {
                        return (
                            <div key={message.id} ref={scrollRef}>
                                {/* Check for sender/receiver & whether user has a nickname */}
                                {(message.sender === sender[0].email) ? (
                                    <div> {(sender[0].nickname && sender[0].email === message.sender) ?
                                        (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname}</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender}</p>)
                                        }
                                        {<p style={{margin: "0"}}>{message.message}</p>}
                                        {<p style={{fontSize: "0.7rem", marginTop: "0"}}><ReactTimeAgo date={message.sent_at} locale="en-US"/></p>}
                                    </div>) : (
                                    <div> {(receiver[0].nickname && receiver[0].email === message.sender) ?
                                        (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname}</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender}</p>)
                                        }
                                        {<p style={{margin: "0"}}>{message.message}</p>}
                                        {<p style={{fontSize: "0.7rem", marginTop: "0"}}><ReactTimeAgo date={message.sent_at} locale="en-US"/></p>}
                                    </div>)}
                            </div>
                        )
                    })}
            </div>)
            : (<p>No chat history available</p>)}

            {/* <div key={message.id}>
                {(message.sender === sender[0].email) ? (<li> {(sender[0].nickname && sender[0].email === message.sender) ? (sender[0].nickname) : (message.sender)}: {message.message}, {format(message.sent_at)}</li>)
                : (<li> {(receiver[0].nickname && receiver[0].email === message.sender) ? (receiver[0].nickname) : (message.sender)}: {message.message}, {format(message.sent_at)}</li>)}
            </div> */}

            {errMsg && <p className="has-text-centered">{errMsg}</p>}

            {/* Input field & button to send chat message */}
            <div style={{marginBottom: "1rem"}}>
                <h2>Send message</h2>
                <input placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat;