import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import ProfileImage from '../assets/images/msnSocMed.png';
import {Breakpoint} from 'react-socks';
import axios from 'axios';
import io from 'socket.io-client';
import TimeAgo from 'react-timeago'
import { v4 as uuid } from 'uuid';
import '../styles/Chatbox.scss';

const Chatbox = () => {
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
        console.log("chicken");

        socket.current.emit("add_user", localStorage.getItem(process.env.REACT_APP_KEY));
        console.log("house");

        socket.current.on("receive_message", (data) => {
            console.log(data);
            setMessageReceived({
                id: data.id,
                sender: data.sender,
                message: data.message,
                sent_at: data.sent_at,
            });
        });
        console.log("farm");
    }, []);

    // Add instant message to chatHistory
    useEffect(() => {
        // setChatHistory((prev) => [...prev, messageReceived]);
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
                    // console.log(response.data.chatHistory);
                    // console.log(response.data.sender[0].nickname, response.data.sender[0].email);
                    setSender(response.data.sender);
                    setReceiver(response.data.receiver);
                    setChatHistory(response.data.chatHistory);
                })
        };
        getChatHistory();
    },[]);
    // Empty brackets trigger rendering only when page is (re)loaded

    // Send message: store in DB & emit via socket
    const sendMessage = async (event) => {
        event.preventDefault();
        if(sentMessage) {
        
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
        console.log("clicked");
    }

    // Add scroll bar to chat history div
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    },[chatHistory]);

    const handleChange = (event) => {
        setSentMessage(event.target.value);
    };

    return (
        <>
            <Breakpoint xsmall>
                <div className="chatbox-body-xsmall chatbox-body">
                    <Link to="/Dashboard">
                        <img className="chatbox-logo" src={Logo} alt="Logo NSN" />
                    </Link>

                    <div className="chat-top chat-top-xsmall">
                        <div className="chatbox-top chatbox-top-xsmall">
                            {(chatHistory.length > 0) ? (
                                <div style={{height: "30rem", overflow: "auto"}}>
                                    {chatHistory.map((message) => {
                                        return (
                                            <div key={message.id} ref={scrollRef}>
                                                {(message.sender === sender[0].email) ? (
                                                    <div className="sender">
                                                        {/* <p style={{fontWeight: "bold", marginBottom: "0"}}>Me</p> */}
                                                        {(sender[0].nickname && sender[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                        <p style={{margin: "0"}}>{message.message}</p>
                                                        <p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>
                                                    </div>
                                                ) : (
                                                    <div className="receiver">
                                                        {(receiver[0].nickname && receiver[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                        {<p style={{margin: "0"}}>{message.message}</p>}
                                                        {<p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            )                        
                            : (<p>No chat history available</p>)} 

                            {errMsg && <p className="has-text-centered">{errMsg}</p>}

                        </div>

                        <div className="profile-top profile-top-xsmall">
                            <img className="profile-picture profile-picture-xsmall" src={ProfileImage} alt="Profile" />
                        </div>
                    </div>

                    <div className="chat-bottom chat-bottom-xsmall">
                        <input className="chatbox-bottom chatbox-bottom-xsmall" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                        <button className="btn-send-xsmall" onClick={sendMessage}>Send</button>

                        <div className="profile-bottom profile-bottom-xsmall">
                            <img className="profile-picture profile-picture-xsmall" src={ProfileImage} alt="Profile" />
                        </div>
                    </div>
                </div>
            </Breakpoint>

        <Breakpoint small>
            <div className="chatbox-body chatbox-body-small">
                <Link to="/Dashboard">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />
                </Link>

                <div className="chat-top">
                    <div className="chatbox-top chatbox-top-small">
                        {(chatHistory.length > 0) ? (
                            <div style={{height: "480px", overflow: "auto"}}>
                                {chatHistory.map((message) => {
                                    return (
                                        <div key={message.id} ref={scrollRef}>
                                            {(message.sender === sender[0].email) ? (
                                                <div className="sender">
                                                    {/* <p style={{fontWeight: "bold", marginBottom: "0"}}>Me</p> */}
                                                    {(sender[0].nickname && sender[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    <p style={{margin: "0"}}>{message.message}</p>
                                                    <p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>
                                                </div>
                                            ) : (
                                                <div className="receiver">
                                                    {(receiver[0].nickname && receiver[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    {<p style={{margin: "0"}}>{message.message}</p>}
                                                    {<p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )                        
                        : (<p>No chat history available</p>)} 

                        {errMsg && <p className="has-text-centered">{errMsg}</p>}
                    </div>

                    <div className="profile-top profile-top-small">
                        <img className="profile-picture profile-picture-small" src={ProfileImage} alt="Profile" />
                    </div>
                </div>

                <div className="chat-bottom">
                    <input className="chatbox-bottom" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-small">
                        <img className="profile-picture profile-picture-small" src={ProfileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint medium>
            <div className="chatbox-body chatbox-body-medium">
                <Link to="/Dashboard">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />
                </Link>

                <div className="chat-top">
                    <div className="chatbox-top chatbox-top-medium">
                        {(chatHistory.length > 0) ? (
                            <div style={{height: "45rem", overflow: "auto"}}>
                                {chatHistory.map((message) => {
                                    return (
                                        <div key={message.id} ref={scrollRef}>
                                            {(message.sender === sender[0].email) ? (
                                                <div className="sender">
                                                    {/* <p style={{fontWeight: "bold", marginBottom: "0"}}>Me</p> */}
                                                    {(sender[0].nickname && sender[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    <p style={{margin: "0"}}>{message.message}</p>
                                                    <p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>
                                                </div>
                                            ) : (
                                                <div className="receiver">
                                                    {(receiver[0].nickname && receiver[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    {<p style={{margin: "0"}}>{message.message}</p>}
                                                    {<p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )                        
                        : (<p>No chat history available</p>)} 

                        {errMsg && <p className="has-text-centered">{errMsg}</p>}
                    </div>

                    <div className="profile-top profile-top-medium">
                        <img className="profile-picture profile-picture-medium" src={ProfileImage} alt="Profile" />
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-medium">
                    <input className="chatbox-bottom" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send-medium" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-medium">
                        <img className="profile-picture profile-picture-medium" src={ProfileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint large>
            <div className="chatbox-body chatbox-body-large">
                <Link to="/Dashboard">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />
                </Link>

                <div className="chat-top chat-top-large">
                    <div className="chatbox-top chatbox-top-large">
                        {(chatHistory.length > 0) ? (
                            <div style={{height: "30rem", overflow: "auto"}}>
                                {chatHistory.map((message) => {
                                    return (
                                        <div key={message.id} ref={scrollRef}>
                                            {(message.sender === sender[0].email) ? (
                                                <div className="sender">
                                                    {/* <p style={{fontWeight: "bold", marginBottom: "0"}}>Me</p> */}
                                                    {(sender[0].nickname && sender[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    <p style={{margin: "0"}}>{message.message}</p>
                                                    <p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>
                                                </div>
                                            ) : (
                                                <div className="receiver">
                                                    {(receiver[0].nickname && receiver[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    {<p style={{margin: "0"}}>{message.message}</p>}
                                                    {<p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )                        
                        : (<p>No chat history available</p>)} 

                        {errMsg && <p className="has-text-centered">{errMsg}</p>}
                    </div>

                    <div className="profile-top profile-top-large">
                        <img className="profile-picture profile-picture-large" src={ProfileImage} alt="Profile" />
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-large">
                    <input className="chatbox-bottom chatbox-bottom-large" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-large">
                        <img className="profile-picture profile-picture-large" src={ProfileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint xlarge>
            <div className="chatbox-body">
                <Link to="/Dashboard">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />
                </Link>

                <div className="chat-top chat-top-xlarge">
                    <div className="chatbox-top chatbox-top-xlarge">
                        {(chatHistory.length > 0) ? (
                            <div style={{height: "30rem", overflow: "auto"}}>
                                {chatHistory.map((message) => {
                                    return (
                                        <div key={message.id} ref={scrollRef}>
                                            {(message.sender === sender[0].email) ? (
                                                <div className="sender">
                                                    {/* <p style={{fontWeight: "bold", marginBottom: "0"}}>Me</p> */}
                                                    {(sender[0].nickname && sender[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    <p style={{margin: "0"}}>{message.message}</p>
                                                    <p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>
                                                </div>
                                            ) : (
                                                <div className="receiver">
                                                    {(receiver[0].nickname && receiver[0].email === message.sender) ? (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname} says:</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender} says:</p>)}
                                                    {<p style={{margin: "0"}}>{message.message}</p>}
                                                    {<p style={{fontSize: "0.7rem", marginTop: "0"}}><TimeAgo date={message.sent_at} /></p>}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )                        
                        : (<p>No chat history available</p>)} 

                        {errMsg && <p className="has-text-centered">{errMsg}</p>}
                    </div>

                    <div className="profile-top profile-top-xlarge">
                        <img className="profile-picture profile-picture-xlarge" src={ProfileImage} alt="Profile" />
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-xlarge">
                    <input className="chatbox-bottom chatbox-bottom-xlarge" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send-xlarge" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-xlarge">
                        <img className="profile-picture profile-picture-xlarge" src={ProfileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </Breakpoint>
        </>
    )
}

export default Chatbox;