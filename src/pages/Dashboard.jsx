import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Breakpoint } from 'react-socks';
import '../styles/Dashboard.scss';

const Dashboard = () => {
    return (
        <>
            <div className="container-logo">
                <img src={ Logo } alt="Logo NSN"/>
            </div>
            <nav className="container-toolbar">

            </nav>
            <div className="container-userInfo">
                <div className="profile-box">
                    <img src="#" alt="Profile picture"/>
                </div>
            </div>
            <form className="status-friends" action="">
                <select className="online" id="">
                    <option value="online_id_1">Master of Disaster and Design</option>
                    <option value="online_id_2">Paperclip</option>
                    <option value="online_id_3">The Dork lord69</option>
                </select>
                <label className="label-online" For="online">Online</label>
                <br/>
                <select className="offline" id="">
                    <option value="offline_id_1">Jordi</option>
                    <option value="offline_id_2">Nhung</option>
                    <option value="offline_id_3">Wendy</option>
                </select>
                <label className="label-offline" For="offline"></label>
            </form>

            <Breakpoint xsmall only>

            </Breakpoint>

            <Breakpoint small only>

            </Breakpoint>

            <Breakpoint medium only>

            </Breakpoint>

            <Breakpoint large only>

            </Breakpoint>

            <Breakpoint xlarge only>

            </Breakpoint>
        </>
    )
}

export default Dashboard;
