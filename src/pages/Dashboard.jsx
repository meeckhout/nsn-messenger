import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/Logo.png';
import ProfileImage from '../assets/images/msnSocMed.png';
import AddFriend from '../assets/images/addFriend.png';
import SearchFriend from '../assets/images/searchFriend.png';
import {FaHeadphonesAlt} from 'react-icons/fa';
import { Breakpoint } from 'react-socks';
import '../styles/Dashboard.scss';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { LastFmData } from '../components/LastFmData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState('');
    const [noSearchResult, setNoSearchResult] = useState('');
    const [friendList, setFriendList] = useState([]);
    const [offlineFriendList, setOfflineFriendList] = useState([]);
    const [onlineFriendList, setOnlineFriendList] = useState([]);
    const [currentNickname, setCurrentNickname] = useState('');
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [values, setValues] = useState({
        userEmail: "",
        nickname: ""
    });
    const [msg, setMsg] = useState('');

    // Update Dashboard when loaded

    const getDashboardInfo = () => {
        axios.get("http://localhost:3001/dashboard", {
            params: {
                user: localStorage.getItem(process.env.REACT_APP_KEY),
            }
        })
            .then(response => {
                // console.log(response.data);
                setCurrentNickname(response.data.nickname);
                setFriendList(response.data.friendList);
                setCurrentNickname(response.data.user[0].nickname);
            })
    };

    useEffect(() => {
        getDashboardInfo();
    }, []);

    useEffect(() => {
        if(friendList) {
            const onlineFriends = friendList.filter(friend => friend.status === 0)
            const offlineFriends = friendList.filter(friend => friend.status === 1)
            setOfflineFriendList(onlineFriends);
            setOnlineFriendList(offlineFriends);
        }
    }, [friendList]);

    // Actions for input fields & buttons

    const handleChange = (event) => {
        setSearchResult("");
        setNoSearchResult("");
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const findUser = async (event) => {
        event.preventDefault();
        setMsg("");
        try {
            const { userEmail } = values;
            if(userEmail && userEmail !== localStorage.getItem(process.env.REACT_APP_KEY)) {
                console.log(userEmail);
                const friendSearch = await axios.post("http://localhost:3001/search", {
                    userEmail: userEmail,
                });
                if(friendSearch.data.search === 'True'){
                    setSearchResult(`${userEmail} exists`);
                } else {
                    setNoSearchResult(`${userEmail} doesn't exist`);
                }
            }
            document.getElementById("addFriendField").style.visibility = "visible";
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
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        document.getElementById("addFriendField").style.visibility = "hidden";
    }

    const addNickname = async (event) => {
        event.preventDefault();
        try {
            const { nickname } = values;
            if(nickname) {
                await axios.post("http://localhost:3001/addNickname", {
                    user: localStorage.getItem(process.env.REACT_APP_KEY),
                    nickname: nickname
                });
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    // Open chatbox
    const changeCurrentChat = (index, friend) => {
        localStorage.setItem(process.env.REACT_APP_CHAT, friend.email);
        setCurrentSelected(index);

        navigate("/Chatbox");
    }

    // Logout button
    const Logout = async (event) => {
        event.preventDefault();
        try {
            const email = localStorage.getItem(process.env.REACT_APP_KEY);
            await axios.post('http://localhost:3001/logout', {
                email,
            });
            localStorage.clear();
            navigate("/Login");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="dashboard-body-container">
            <Breakpoint xsmall only>
                <div className="dashboard-container-xsmall">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                        <button onClick={(event) => Logout(event)}>Logout</button>
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile" />
                        <div className="nickname-container">
                            <div className="nicknameInput">
                                {currentNickname ? <input type="text" className="nickname" placeholder={currentNickname} name="nickname" onChange={(e) => handleChange(e)} /> : <input type="text" className="nickname" placeholder="No nickname set" name="nickname" onChange={(e) => handleChange(e)} />}
                                <button onClick={addNickname} className="update-nickname">
                                    Update
                                </button>
                            </div>
                            <div className="current-song">
                                <FaHeadphonesAlt />
                                <LastFmData />
                            </div>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)} />
                        <button className="search-friend-button" onClick={findUser}>
                            <img src={SearchFriend} alt="" />
                        </button>
                        <Link to="/Bejeweled" className="gameLink">
                            <button className="play-game">Play game!</button>
                        </Link>
                    </div>
                    {msg && <p className="has-text-centered">{msg}</p>}
                    {searchResult && (
                        <form id="addFriendField" onSubmit={addFriend} className="box">
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="addFriend-btn">
                                <img src={AddFriend} alt="" />
                            </button>
                        </form>
                    )}
                    {noSearchResult && <p className="has-text-centered">{noSearchResult}</p>}
                    <div className="online">
                        <button className="collapsible">⇳ Online ({onlineFriendList.length})</button>
                        {onlineFriendList ? (
                            <ul className="friendlist">
                                {onlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline ({offlineFriendList.length})</button>
                        {offlineFriendList ? (
                            <ul className="friendlist">
                                {offlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint small only>
                <div className="dashboard-container-small">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                        <button onClick={(event) => Logout(event)}>Logout</button>
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile" />
                        <div className="nickname-container">
                            <div className="nicknameInput">
                                {currentNickname ? <input type="text" className="nickname" placeholder={currentNickname} name="nickname" onChange={(e) => handleChange(e)} /> : <input type="text" className="nickname" placeholder="No nickname set" name="nickname" onChange={(e) => handleChange(e)} />}{" "}
                                <button onClick={addNickname} className="update-nickname">
                                    Update
                                </button>
                            </div>
                            <div className="current-song">
                                <FaHeadphonesAlt />
                                <LastFmData />
                            </div>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)} />
                        <button className="search-friend-button" onClick={findUser}>
                            <img src={SearchFriend} alt="" />
                        </button>
                        <Link to="/Bejeweled" className="gameLink">
                            <button className="play-game">Play game!</button>
                        </Link>
                    </div>
                    {msg && <p className="has-text-centered">{msg}</p>}
                    {searchResult && (
                        <form id="addFriendField" onSubmit={addFriend} className="box">
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="addFriend-btn">
                                <img src={AddFriend} alt="" />
                            </button>
                        </form>
                    )}
                    {noSearchResult && <p className="has-text-centered">{noSearchResult}</p>}
                    <div className="online">
                        <button className="collapsible">⇳ Online ({onlineFriendList.length})</button>
                        {onlineFriendList ? (
                            <ul className="friendlist">
                                {onlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline ({offlineFriendList.length})</button>
                        {offlineFriendList ? (
                            <ul className="friendlist">
                                {offlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint medium only>
                <div className="dashboard-container-medium">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                        <button onClick={(event) => Logout(event)}>Logout</button>
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile" />
                        <div className="nickname-container">
                            <div className="nicknameInput">
                                {currentNickname ? <input type="text" className="nickname" placeholder={currentNickname} name="nickname" onChange={(e) => handleChange(e)} /> : <input type="text" className="nickname" placeholder="No nickname set" name="nickname" onChange={(e) => handleChange(e)} />}{" "}
                                <button onClick={addNickname} className="update-nickname">
                                    Update
                                </button>
                            </div>
                            <div className="current-song">
                                <FaHeadphonesAlt />
                                <LastFmData />
                            </div>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)} />
                        <button className="search-friend-button" onClick={findUser}>
                            <img src={SearchFriend} alt="" />
                        </button>
                        <Link to="/Bejeweled" className="gameLink">
                            <button className="play-game">Play game!</button>
                        </Link>
                    </div>
                    {msg && <p className="has-text-centered">{msg}</p>}
                    {searchResult && (
                        <form id="addFriendField" onSubmit={addFriend} className="box" style={{ display: "flex" }}>
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="addFriend-btn">
                                <img src={AddFriend} alt="" />
                            </button>
                        </form>
                    )}
                    {noSearchResult && <p className="has-text-centered">{noSearchResult}</p>}

                    <div className="online">
                        <button className="collapsible">⇳ Online ({onlineFriendList.length})</button>
                        {onlineFriendList ? (
                            <ul className="friendlist">
                                {onlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline ({offlineFriendList.length})</button>
                        {offlineFriendList ? (
                            <ul className="friendlist">
                                {offlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint large only>
                <div className="dashboard-container-large">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                        <button onClick={(event) => Logout(event)}>Logout</button>
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile" />
                        <div className="nickname-container">
                            <div className="nicknameInput">
                                {currentNickname ? <input type="text" className="nickname" placeholder={currentNickname} name="nickname" onChange={(e) => handleChange(e)} /> : <input type="text" className="nickname" placeholder="No nickname set" name="nickname" onChange={(e) => handleChange(e)} />}{" "}
                                <button onClick={addNickname} className="update-nickname">
                                    Update
                                </button>
                            </div>
                            <div className="current-song">
                                <FaHeadphonesAlt />
                                <LastFmData />
                            </div>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)} />
                        <button className="search-friend-button" onClick={findUser}>
                            <img src={SearchFriend} alt="" />
                        </button>
                        <Link to="/Bejeweled" className="gameLink">
                            <button className="play-game">Play game!</button>
                        </Link>
                    </div>
                    {msg && <p className="has-text-centered">{msg}</p>}
                    {searchResult && (
                        <form id="addFriendField" onSubmit={addFriend} className="box" style={{ display: "flex" }}>
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="addFriend-btn">
                                <img src={AddFriend} alt="" />
                            </button>
                        </form>
                    )}
                    {noSearchResult && <p className="has-text-centered">{noSearchResult}</p>}
                    <div className="online">
                        <button className="collapsible">⇳ Online ({onlineFriendList.length})</button>
                        {onlineFriendList ? (
                            <ul className="friendlist">
                                {onlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline ({offlineFriendList.length})</button>
                        {offlineFriendList ? (
                            <ul className="friendlist">
                                {offlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint xlarge only>
                <div className="dashboard-container-xlarge">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                        <button onClick={(event) => Logout(event)}>Logout</button>
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile" />
                        <div className="nickname-container">
                            <div className="nicknameInput">
                                {currentNickname ? <input type="text" className="nickname" placeholder={currentNickname} name="nickname" onChange={(e) => handleChange(e)} /> : <input type="text" className="nickname" placeholder="No nickname set" name="nickname" onChange={(e) => handleChange(e)} />}{" "}
                                <button onClick={addNickname} className="update-nickname">
                                    Update
                                </button>
                            </div>
                            <div className="current-song">
                                <FaHeadphonesAlt />
                                <LastFmData />
                            </div>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" placeholder="Search for email" name="userEmail" onChange={(e) => handleChange(e)} />
                        <button className="search-friend-button" onClick={findUser}>
                            <img src={SearchFriend} alt="" />
                        </button>
                        <Link to="/Bejeweled" className="gameLink">
                            <button className="play-game">Play game!</button>
                        </Link>
                    </div>
                    {msg && <p className="has-text-centered">{msg}</p>}
                    {searchResult && (
                        <form id="addFriendField" onSubmit={addFriend} className="box" style={{ display: "flex" }}>
                            <p className="has-text-centered">{searchResult}</p>
                            <button type="submit" className="addFriend-btn">
                                <img src={AddFriend} alt="" />
                            </button>
                        </form>
                    )}
                    {noSearchResult && <p className="has-text-centered">{noSearchResult}</p>}
                    <div className="online">
                        <button className="collapsible">⇳ Online ({onlineFriendList.length})</button>
                        {onlineFriendList ? (
                            <ul className="friendlist">
                                {onlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline ({offlineFriendList.length})</button>
                        {offlineFriendList ? (
                            <ul className="friendlist">
                                {offlineFriendList.map((friend, index) => {
                                    return (
                                        <div key={friend.id} className={`friend ${index === currentSelected ? "selected" : ""}`} onClick={() => changeCurrentChat(index, friend)}>
                                            {friend.nickname ? <li>{friend.nickname}</li> : <li>{friend.email}</li>}
                                        </div>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>You have no friends</p>
                        )}
                    </div>
                </div>
            </Breakpoint>
        </div>
    );

}

export default Dashboard;