import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Navbar = () => {
    const navigate = useNavigate();
 
    const Logout = async (event) => {
        event.preventDefault();
        console.log("Logout clicked");
        try {
            const email = localStorage.getItem(process.env.REACT_APP_KEY);
            await axios.post('http://localhost:3001/logout', {
                email,
            });
            localStorage.clear();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://localhost:3000/">Logo</a>
 
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/dashboard" className="navbar-item">
                            Dashboard
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={(event) => Logout(event)} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 
export default Navbar;