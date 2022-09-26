import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import {useEffect, useState, useRef} from 'react';
import ReactTimeAgo from 'react-time-ago';

const Chat = () => {

    const socket = useRef();
    const scrollRef = useRef();

    const [messageReceived, setMessageReceived] = useState("");

    const [sender, setSender] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const [values, setValues] = useState({
        newMessage: "",
    });

    // Create socket.io connection to backend server
    useEffect(() => {
        socket.current = io.connect("http://localhost:3001");
        console.log("chicken");
        socket.current.emit("add_user", localStorage.getItem(process.env.REACT_APP_KEY));
        console.log("house");
    }, []);

    useEffect(() => {
        socket.current.emit("receive_message", (data) => {
            console.log("mouse");
            console.log(data);
            console.log("horse");
            setMessageReceived({
                sender: data.sender,
                message: data.message,
                sent_at: Date.now(),
            });
            console.log("cow");
        });
    },[messageReceived]);

    useEffect(() => {
        messageReceived && setChatHistory((prev) => [...prev, messageReceived]);
    }, [messageReceived]);

    // Get chatbox data
    const getChatHistory = () => {
        axios.get("http://localhost:3001/chat", {
            params: {
                sender: localStorage.getItem(process.env.REACT_APP_KEY),
                receiver: localStorage.getItem(process.env.REACT_APP_CHAT)
            }
        })
        .then(response => {
            // console.log(response.data);
            // console.log(response.data.chatHistory);
            // console.log(response.data.sender[0].nickname, response.data.sender[0].email);
            setSender(response.data.sender);
            setReceiver(response.data.receiver);
            setChatHistory(response.data.chatHistory);
        })
    };

    useEffect(() => {
        getChatHistory();
    },[]);

    // Send message: store in DB & emit via socket
    const sendMessage = async (event) => {
        event.preventDefault();
        let { newMessage } = values;

        //Emit mew message via socket
        socket.current.emit("new_message", {
            sender: localStorage.getItem(process.env.REACT_APP_KEY),
            receiver: localStorage.getItem(process.env.REACT_APP_CHAT),
            message: newMessage
        });

        // Add instant message to chatHistory
        // const messages = [...chatHistory]
        // messages.push({
        //     sender: localStorage.getItem(process.env.REACT_APP_KEY),
        //     receiver: localStorage.getItem(process.env.REACT_APP_CHAT),
        //     message: newMessage,
        //     sent_at: Date.now()
        // });
        // setChatHistory(messages);

        // Send message to DB
        try {
            // let { newMessage } = values;
            await axios.post("http://localhost:3001/sendMessage", {
                sender: localStorage.getItem(process.env.REACT_APP_KEY),
                members: [localStorage.getItem(process.env.REACT_APP_KEY), localStorage.getItem(process.env.REACT_APP_CHAT)],
                message: newMessage
            });
            // newMessage = "";
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

    // Emit submitted message as event to back-end server
    // const sendMessage = () => {
    //     const { message } = values;
    //     socket.emit("sent_message", {userId, message});      
    // };
    // // Connect via socket.io
    // socket.on("connect", () => {
    //     console.log(`${socket.id}`);
    //     // setUserId(socket.id);
    // });
    // // Log errors in browser console
    // socket.on("connect_error", (error) => {
    //     console.log(`Connection error due to ${error.message}`);
    // });
    // // Fetch received message from back-end & update useState variable
    // useEffect(() => {
    // socket.on("received_message", (data) => {
    //     setUserReceived(data.userId);
    //     setMessageReceived(data.message);
    //     });
    // });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
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