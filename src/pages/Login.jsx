import React, { useState, useEffect } from 'react'
import { Breakpoint } from "react-socks";
import Logo from "../assets/images/Logo.png";
import msnSocMed from "../assets/images/msnSocMed.png";
import "../styles/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // console.log("LOGcat");
        if (localStorage.getItem(process.env.REACT_APP_KEY)) {
            // console.log("LOGcow");
            navigate("/dashboard");
        }
    },[navigate]);

    const handleChange = (event) => {
        setMsg("");
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateLogin = () => {
        const { email, password } = values;
        if (!email || !validateEmail(email)) {
            setMsg("Email has no valid format");
          return false;
        } else if (!password || password.length < 8) {
            setMsg("Password should be equal or greater than 8 characters");
          return false;
        } 
        return true;
    };
 
    const Login = async (event) => {
        event.preventDefault();
        try {
            if (validateLogin()) {
                const { email, password} = values;
                await axios.post('http://localhost:3001/login', {
                    email,
                    password,
                });
                // Store username in local storage & navigate to dashboard
                localStorage.setItem(process.env.REACT_APP_KEY, email);
                localStorage.setItem(process.env.REACT_APP_STATUS, true);
                // console.log("horse");
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="login-body">
            <Breakpoint xsmall>
                <div className="container-login xsmall">
                    <div className="taskbar taskbar-xsmall">
                        <img className="img img-xsmall" src={Logo} alt="NSN Messenger" />
                    </div>
                    <nav className="menu-bar">
                        <ul>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img className="profile-picture" src={msnSocMed} alt="Profile picture" />
                        <form onSubmit={(event) => Login(event)} className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" placeholder="#" name="email" onChange={(e) => handleChange(e)} />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                            <input type="password" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                            </div>
                        </form>
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="select-status">
                            <label>Status: </label>
                            <select name="" id="">
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember my Password</label>
                            </div>
                            <div className="sign-me-in-auto">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sign me in automatically</label>
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className="login-footer">
                            <a className="forgot-password" href="">
                                Forgot your password?
                            </a>
                            <nav>
                                <p>The Nostalgia Network</p>
                                <a href="">Create new account</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint small>
                <div className="container-login small">
                    <div className="taskbar taskbar-small">
                        <img className="img img-small" src={Logo} alt="NSN Messenger" />
                    </div>
                    <nav className="menu-bar">
                        <ul>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img className="profile-picture" src={msnSocMed} alt="Profile picture" />
                        <form onSubmit={(event) => Login(event)} className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                            <input type="text" placeholder="#" name="email" onChange={(e) => handleChange(e)} />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                            <input type="password" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                            </div>
                        </form>
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="select-status">
                            <label>Status: </label>
                            <select name="" id="">
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember my Password</label>
                            </div>
                            <div className="sign-me-in-auto">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sign me in automatically</label>
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className="login-footer">
                            <a className="forgot-password" href="">
                                Forgot your password?
                            </a>
                            <nav>
                                <p>The Nostalgia Network</p>
                                <a href="">Create new account</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="container-login medium">
                    <div className="taskbar taskbar-medium">
                        <img className="img img-medium" src={Logo} alt="NSN Messenger" />
                    </div>
                    <nav className="menu-bar">
                        <ul>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img className="profile-picture" src={msnSocMed} alt="Profile picture" />
                        <form onSubmit={(event) => Login(event)} className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" placeholder="#" name="email" onChange={(e) => handleChange(e)} />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                            <input type="password" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                            </div>
                        </form>
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="select-status">
                            <label>Status: </label>
                            <select name="" id="">
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember my Password</label>
                            </div>
                            <div className="sign-me-in-auto">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sign me in automatically</label>
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className="login-footer">
                            <a className="forgot-password" href="">
                                Forgot your password?
                            </a>
                            <nav>
                                <p>The Nostalgia Network</p>
                                <a href="">Create new account</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint large>
                <div className="container-login large">
                    <div className="taskbar taskbar-large">
                        <img className="img img-large" src={Logo} alt="NSN Messenger" />
                    </div>
                    <nav className="menu-bar">
                        <ul>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img className="profile-picture" src={msnSocMed} alt="Profile picture" />
                        <form onSubmit={(event) => Login(event)} className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" placeholder="#" name="email" onChange={(e) => handleChange(e)} />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                            <input type="password" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                            </div>
                        </form>
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="select-status">
                            <label>Status: </label>
                            <select name="" id="">
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember my Password</label>
                            </div>
                            <div className="sign-me-in-auto">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sign me in automatically</label>
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className="login-footer">
                            <a className="forgot-password" href="">
                                Forgot your password?
                            </a>
                            <nav>
                                <p>The Nostalgia Network</p>
                                <a href="">Create new account</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint xlarge>
                <div className="container-login xlarge">
                    <div className="taskbar taskbar-xlarge">
                        <img className="img img-xlarge" src={Logo} alt="NSN Messenger" />
                    </div>
                    <nav className="menu-bar">
                        <ul>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a href="javascript:void(0)" className="drop-button">
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img className="profile-picture" src={msnSocMed} alt="Profile picture" />
                        <form onSubmit={(event) => Login(event)} className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" placeholder="#" name="email" onChange={(e) => handleChange(e)} />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                            <input type="password" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                            </div>
                        </form>
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="select-status">
                            <label>Status: </label>
                            <select name="" id="">
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember my Password</label>
                            </div>
                            <div className="sign-me-in-auto">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sign me in automatically</label>
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className="login-footer">
                            <a className="forgot-password" href="">
                                Forgot your password?
                            </a>
                            <nav>
                                <p>The Nostalgia Network</p>
                                <a href="">Create new account</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Breakpoint>
        </div>
    );
};

export default Login;
