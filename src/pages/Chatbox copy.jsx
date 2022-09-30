import React, {useEffect, useState, useRef} from 'react';
import Logo from '../assets/images/Logo.png';
import {Breakpoint} from 'react-socks';
import axios from 'axios';
// import io from 'socket.io-client';
import ReactTimeAgo from 'react-time-ago';
// import { v4 as uuid } from 'uuid';
import '../styles/Chatbox.scss';

const Chatbox = () => {
    // const socket = useRef();
    const scrollRef = useRef();

    const [messageReceived, setMessageReceived] = useState("");

    const [sender, setSender] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const [sentMessage, setSentMessage] = useState();

    // Create socket.io connection to backend server
    // useEffect(() => {

        // socket.current = io.connect("http://localhost:3001");
        // console.log("chicken");

        // socket.current.emit("add_user", localStorage.getItem(process.env.REACT_APP_KEY));
        // console.log("house");

        // socket.current.on("receive_message", (data) => {
        //     console.log(data);
        //     setMessageReceived({
        //         id: data.id,
        //         sender: data.sender,
        //         message: data.message,
        //         sent_at: data.sent_at,
        //     });
        // });
        // console.log("farm");
    // }, []);

    // Add instant message to chatHistory
    // useEffect(() => {
    //     messageReceived && setChatHistory((prev) => [...prev, messageReceived]);
    // }, [messageReceived]);

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
                    console.log(response.data);
                    // console.log(response.data.chatHistory);
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
        console.log("clicked");
        console.log(sentMessage);
        //Emit mew message via socket
        // const unique_id = uuid();
        // const small_id = unique_id.slice(0,8)
        // socket.current.emit("new_message", {
        //     id: small_id,
        //     sender: localStorage.getItem(process.env.REACT_APP_KEY),
        //     receiver: localStorage.getItem(process.env.REACT_APP_CHAT),
        //     message: sentMessage,
        //     sent_at: Date.now()
        // });

        // Send message to DB
        // try {
        //     await axios.post("http://localhost:3001/sendMessage", {
        //         sender: localStorage.getItem(process.env.REACT_APP_KEY),
        //         members: [localStorage.getItem(process.env.REACT_APP_KEY), localStorage.getItem(process.env.REACT_APP_CHAT)],
        //         message: sentMessage
        //     });
        //     setSentMessage("");
        // } catch (error) {
        //     if (error.response) {
        //         setErrMsg(error.response.data.msg);
        //     }
        // }
    }

    // Add scroll bar to chat history div
    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({behavior: "smooth"});
    // },[chatHistory]);

    const handleChange = (event) => {
        setSentMessage(event.target.value);
    };

    return (
        <>
            <Breakpoint xsmall>
                <div className="chatbox-body-xsmall chatbox-body">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                    <div className="chat-top chat-top-xsmall">
                        <div className="chatbox-top chatbox-top-xsmall">

                        </div>

                        <div className="profile-top profile-top-xsmall">
                        </div>
                    </div>

                    <div className="chat-bottom chat-bottom-xsmall">
                        <input className="chatbox-bottom chatbox-bottom-xsmall" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                        <button className="btn-send" onClick={sendMessage}>Send</button>

                       <div className="profile-bottom profile-bottom-xsmall">
                       </div>
                    </div>
                </div>
            </Breakpoint>

        <Breakpoint small>
            <div className="chatbox-body chatbox-body-small">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top">
                    <div className="chatbox-top">
                    </div>

                    <div className="profile-top">
                    </div>
                </div>

                <div className="chat-bottom">
                    <input className="chatbox-bottom" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom">
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint medium>
            <div className="chatbox-body chatbox-body-medium">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top">
                    <div className="chatbox-top">
                    </div>

                    <div className="profile-top">
                    </div>
                </div>

                <div className="chat-bottom">
                    <input className="chatbox-bottom" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom">
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint large>
            <div className="chatbox-body chatbox-body-large">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top chat-top-large">
                    <div className="chatbox-top chatbox-top-large">
                    </div>

                    <div className="profile-top profile-top-large">
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-large">
                    <input className="chatbox-bottom chatbox-bottom-large" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-large">
                    </div>
                </div>
            </div>
        </Breakpoint>

        <Breakpoint xlarge>
            <div className="chatbox-body">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top chat-top-xlarge">
                    <div className="chatbox-top chatbox-top-xlarge">
                        {(chatHistory.length > 0) ? (
                            <div>
                                <p>yes</p>
                                {(message.sender === sender[0].email) ? (<p>yes</p>) : (<p>no</p>)}
                            </div>
                        )

                        // (<div style={{height: "200px", overflow: "auto", margin: "1rem", padding: "1rem", border: "1px solid black"}}>
                        //         {chatHistory.map((message) => {
                        //             return (
                        //                 <div key={message.id} ref={scrollRef}>
                        //                     {(message.sender === sender[0].email) ? (
                        //                         <div> {(sender[0].nickname && sender[0].email === message.sender) ?
                        //                             (<p style={{fontWeight: "bold", marginBottom: "0"}}>{sender[0].nickname}</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender}</p>)
                        //                         }
                        //                             {<p style={{margin: "0"}}>{message.message}</p>}
                        //                             {<p style={{fontSize: "0.7rem", marginTop: "0"}}><ReactTimeAgo date={message.sent_at} locale="en-US"/></p>}
                        //                         </div>) : (
                        //                         <div> {(receiver[0].nickname && receiver[0].email === message.sender) ?
                        //                             (<p style={{fontWeight: "bold", marginBottom: "0"}}>{receiver[0].nickname}</p>) : (<p style={{fontWeight: "bold", marginBottom: "0"}}>{message.sender}</p>)
                        //                         }
                        //                             {<p style={{margin: "0"}}>{message.message}</p>}
                        //                             {<p style={{fontSize: "0.7rem", marginTop: "0"}}><ReactTimeAgo date={message.sent_at} locale="en-US"/></p>}
                        //                         </div>)}
                        //                 </div>
                        //             )
                        //         })}
                        //     </div>)
                        
                        : (<p>No chat history available</p>)} 

                        {errMsg && <p className="has-text-centered">{errMsg}</p>}
                    </div>

                    <div className="profile-top profile-top-xlarge">
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-xlarge">
                    <input className="chatbox-bottom chatbox-bottom-xlarge" placeholder="Say something..." name="newMessage" onChange={(e) => handleChange(e)} />
                    <button className="btn-send" onClick={sendMessage}>Send</button>

                    <div className="profile-bottom profile-bottom-xlarge">
                    </div>
                </div>
            </div>
        </Breakpoint>
        </>
    )
}

export default Chatbox;