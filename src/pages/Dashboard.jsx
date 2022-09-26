import React from 'react';
import Logo from '../assets/images/Logo.png';
import ProfileImage from '../assets/images/msnSocMed.png';
import AddFriend from '../assets/images/addFriend.png';
import { Breakpoint } from 'react-socks';
import '../styles/Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard-body-container">
            <Breakpoint xsmall only></Breakpoint>

            <Breakpoint small only></Breakpoint>

            <Breakpoint medium only></Breakpoint>

            <Breakpoint large only></Breakpoint>

            <Breakpoint xlarge only>
                <div className="dashboard-container-xlarge">
                    <div className="container-taskbar">
                        <img src={Logo} alt="Logo NSN" />
                    </div>
                    <div className="container-userInfo">
                        <img className="profile-picture" src={ProfileImage} alt="Profile picture" />
                        <div className="nickname-container">
                            <p className="nickname">Master of Disaster</p>
                            <p className="song-playing">Ik spring uit een vliegmachien - OG Eddie</p>
                        </div>
                    </div>
                    <div className="add-friends">
                        <input type="text" className="search-friend" />
                        <button className="add-friend-button">
                            <img src={AddFriend} alt="" />
                        </button>
                    </div>
                    <div className="online">
                        <button className="collapsible">⇳ Online (3)</button>
                        <ul className="friendlist">
                            <li>Master of Disaster and Design</li>
                            <li>The Dork lord69</li>
                            <li>Paperclip</li>
                        </ul>
                    </div>
                    <div className="offline">
                        <button className="collapsible">⇳ Offline (2)</button>
                        <ul className="friendlist">
                            <li>Negasonic teenage Warhead</li>
                            <li>Oliver</li>
                        </ul>
                    </div>
                </div>
            </Breakpoint>
        </div>
    );
}

export default Dashboard;
