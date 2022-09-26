import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();
    const [friendList, setFriendList] = useState([]);
    const [currentNickname, setCurrentNickname] = useState('');
    const [currentImgLink, setCurrentImgLink] = useState('');
    const [newImgLink, setNewImgLink] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [noSearchResult, setNoSearchResult] = useState('');
    const [msg, setMsg] = useState('');
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [values, setValues] = useState({
        userEmail: "",
        nickname: ""
    });

    // Update Dashboard when loaded

    const getDashboardInfo = () => {
        // console.log(localStorage.getItem(process.env.REACT_APP_KEY));
        axios.get("http://localhost:3001/dashboard", {
            params: {
                user: localStorage.getItem(process.env.REACT_APP_KEY),
            }
        })
        .then(response => {
            // console.log(response.data);
            // console.log(response.data.friendList);
            // console.log(response.data.user[0].nickname);
            setCurrentNickname(response.data.nickname);
            setFriendList(response.data.friendList);
            setCurrentNickname(response.data.user[0].nickname);
            setCurrentImgLink(response.data.user[0].profilePic);
        })
    };

    useEffect(() => {
        getDashboardInfo();
        setNewImgLink("/assets/images/pic1.png");
    },[]);

    // Open chatbox
    const changeCurrentChat = (index, friend) => {
        // console.log(index, friend);
        localStorage.setItem(process.env.REACT_APP_CHAT, friend.email);
        setCurrentSelected(index);

        navigate("/chat");
    }

    // Dashboard button - post requests

    const addImage = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3001/addImage`, {
                user: localStorage.getItem(process.env.REACT_APP_KEY),
                imgLink: newImgLink
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    const findUser = async (event) => {
        event.preventDefault();
        setMsg("");
        try {
            const { userEmail } = values;
            const friendSearch = await axios.post("http://localhost:3001/search", {
                userEmail: userEmail,
            });
            // console.log(friendSearch.data);
            if(friendSearch.data.search === 'True'){
                setSearchResult(`${userEmail} exists`);
            } else {
                setNoSearchResult(`${userEmail} doesn't exist`);
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const addNickname = async (event) => {
        event.preventDefault();
        try {
            const { nickname } = values;
            await axios.post("http://localhost:3001/addNickname", {
                user: localStorage.getItem(process.env.REACT_APP_KEY),
                nickname: nickname
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const addFriend = async (event) => {
        event.preventDefault();
        try {
            const { userEmail } = values;
            await axios.post("http://localhost:3001/addFriend", {
                user: localStorage.getItem(process.env.REACT_APP_KEY),
                search: userEmail
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const handleChange = (event) => {
        setSearchResult("");
        setNoSearchResult("");
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <h1 style={{fontWeight: "bold", fontSize: "32px"}}>Welcome</h1>

                    {/* Add nickname */}
                    <h2 style={{fontWeight: "bold"}}>Current nickname</h2>
                    {currentNickname ? (<p>{currentNickname}</p>) : (<p>No nickname set</p>)}
                    <form onSubmit={addNickname} className="box">
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="field mt-5">
                            <label className="label">Input field to update nickname</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder="Enter nickname" name="nickname" onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type="submit" className="button is-success is-fullwidth">Add</button>
                        </div>
                    </form>

                    {/* Get & update link to profile picture */}
                    <div>
                        <h2>Current image link</h2>
                        {currentImgLink ? (<p>{currentImgLink}</p>) : (<p>Default pic src: {newImgLink}</p>)}
                        <h2>Set profile image</h2>
                        <button type="submit" className="button is-success" onClick={addImage}>Add image</button>
                    </div>

                    {/* Get list of friends */}
                    <div>
                        <h2>My friends</h2>
                        {friendList ? (
                            <div style={{display: "flex"}}>
                                {/* Online status */}
                                <div>
                                    <ul>
                                        {friendList.map((friend, index) => {
                                            return (
                                                <div key={friend.id}>
                                                    {(friend.status === 1) ? (<li>online</li>) : (<li>offline</li>)}
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {/* Friend names */}
                                <div>
                                    <ul>
                                        {friendList.map((friend, index) => {
                                            return (
                                                <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick = {() => changeCurrentChat(index, friend)}>
                                                    {friend.nickname ? (<li>{friend.nickname}</li>) : (<li>{friend.email}</li>)}
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>)
                        : (<p>You have no friends</p>)}
                    </div>

                    {/* Find registered user */}
                    <form onSubmit={findUser} className="box">
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="field mt-5">
                            <label className="label">Input field to search for user by email</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)}/>
                                {/* value={userEmail} & onChange={(e) => setUserEmail(e.target.value)} */}
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type="submit" className="button is-success is-fullwidth">Find</button>
                        </div>
                    </form>

                    {/* Add friend */}
                    {searchResult &&
                        <form onSubmit={addFriend} className="box">
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="button is-success is-fullwidth">Add</button>
                        </form>
                    }
                    {noSearchResult &&
                        <p className="has-text-centered">{noSearchResult}</p>
                    }

                </div>
            </div>
        </section>
    )
}
 
export default Dashboard;