import React from "react";
import { Breakpoint } from "react-socks";
import Logo from "../assets/images/Logo.png";
import msnSocMed from "../assets/images/msnSocMed.png";
import "../styles/Login.scss";


const Login = () => {
    return (
        <div className="login-body">
            <Breakpoint xsmall>
                <div className="container-login xsmall">
                    <div className="taskbar-xsmall">
                        <img
                            className="img img-xsmall"
                            src={Logo}
                            alt="NSN Messenger"
                        />
                    </div>
                    <nav className="menu-bar-xsmall">
                        <ul>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page-xsmall">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img
                            className="profile-picture"
                            src={msnSocMed}
                            alt="Profile picture"
                        />
                        <div className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                                <input type="text" />
                            </div>
                        </div>
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
                                <label htmlFor="">
                                    Sign me in automatically
                                </label>
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
                    <div className="taskbar-small">
                        <img
                            className="img img-small"
                            src={Logo}
                            alt="NSN Messenger"
                        />
                    </div>
                    <nav className="menu-bar-small">
                        <ul>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page-small">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img
                            className="profile-picture"
                            src={msnSocMed}
                            alt="Profile picture"
                        />
                        <div className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                                <input type="text" />
                            </div>
                        </div>
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
                                <label htmlFor="">
                                    Sign me in automatically
                                </label>
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
                    <div className="taskbar-medium">
                        <img
                            className="img img-medium"
                            src={Logo}
                            alt="NSN Messenger"
                        />
                    </div>
                    <nav className="menu-bar-medium">
                        <ul>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page-medium">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img
                            className="profile-picture"
                            src={msnSocMed}
                            alt="Profile picture"
                        />
                        <div className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                                <input type="text" />
                            </div>
                        </div>
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
                                <label htmlFor="">
                                    Sign me in automatically
                                </label>
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
                    <div className="taskbar-large">
                        <img
                            className="img img-large"
                            src={Logo}
                            alt="NSN Messenger"
                        />
                    </div>
                    <nav className="menu-bar-large">
                        <ul>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page-large">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img
                            className="profile-picture"
                            src={msnSocMed}
                            alt="Profile picture"
                        />
                        <div className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                                <input type="text" />
                            </div>
                        </div>
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
                                <label htmlFor="">
                                    Sign me in automatically
                                </label>
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
                    <div className="taskbar-xlarge">
                        <img
                            className="img img-xlarge"
                            src={Logo}
                            alt="NSN Messenger"
                        />
                    </div>
                    <nav className="menu-bar-xlarge">
                        <ul>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    File
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Contacts
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Actions
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Tools
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                            <li className="dropdown-menu">
                                <a
                                    href="javascript:void(0)"
                                    className="drop-button"
                                >
                                    Help
                                </a>
                                <div className="dropdown-content">
                                    <a href="#">Test</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-page-xlarge">
                        <div className="nsn-text">
                            <span>nsn</span>Messenger
                        </div>
                        <img
                            className="profile-picture"
                            src={msnSocMed}
                            alt="Profile picture"
                        />
                        <div className="login-input">
                            <label>E-mail adress:</label>
                            <div className="email-input">
                                <input type="text" />
                                <select name="" id=""></select>
                            </div>
                            <label>Password:</label>
                            <div className="password-input">
                                <input type="text" />
                            </div>
                        </div>
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
                                <label htmlFor="">
                                    Sign me in automatically
                                </label>
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
