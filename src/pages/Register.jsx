import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/Logo.png";
// import msnLogo from "../assets/images/msnLogo.png";
import animatedNsnLogo from "../assets/images/nsn_animation.gif";
import { Breakpoint } from "react-socks";
import { RiUser3Fill, RiLockPasswordFill } from "react-icons/ri";
import "../styles/Register.scss";

const Register = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        confPassword: "",
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_KEY)) {
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

    const validateRegistration = () => {
        const { email, password, confPassword} = values;
        if (password !== confPassword) {
            setMsg("Password and confirmation password do not match");
          return false;
        } else if (!email || !validateEmail(email)) {
            setMsg("Enter a valid email address");
        } else if (!password || password.length < 8) {
            setMsg("Password should be equal or greater than 8 characters");
          return false;
        } 
        return true;
    };
 
    const Register = async (event) => {
        event.preventDefault();
        try {
            if (validateRegistration()) {
                const { email, password, confPassword} = values;
                await axios.post('http://localhost:3001/register', {
                    email,
                    password,
                    confPassword
                });
                navigate("/Login");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="register-body">
            <Breakpoint xsmall only>
                <div className="container-register xsmall">
                    <div className="header-register">
                        <img
                            className="nsn-logo-header"
                            src={Logo}
                            alt="nsn header logo"
                        />
                    </div>
                    <img
                        className="big-nsn-image "
                        src={animatedNsnLogo}
                        alt="Two figures"
                    />

                    <form onSubmit={(event) => Register(event)} className="register-input">
                        {msg && <p className="has-text-centered">{msg}</p>}
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                                name="email" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="password" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="confPassword" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="register-sign-up">sign up</button>
                    </form> 
                    <p className="register-user-log-in">
                        Already a user? <a href="/login">log in</a>
                    </p>
                </div>
            </Breakpoint>

            <Breakpoint small only>
                <div className="container-register small">
                    <div className="header-register">
                        <img
                            className="nsn-logo-header"
                            src={Logo}
                            alt="nsn header logo"
                        />
                    </div>
                    <img
                        className="big-nsn-image "
                        src={animatedNsnLogo}
                        alt="Two figures"
                    />

                    <form onSubmit={(event) => Register(event)} className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                                name="email" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="password" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="confPassword" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="register-sign-up">sign up</button>
                    </form> 
                    <p className="register-user-log-in">
                        Already a user? <a href="/login">log in</a>
                    </p>
                </div>
            </Breakpoint>

            <Breakpoint medium only>
                <div className="container-register medium">
                    <div className="header-register">
                        <img
                            className="nsn-logo-header"
                            src={Logo}
                            alt="nsn header logo"
                        />
                    </div>
                    <img
                        className="big-nsn-image "
                        src={animatedNsnLogo}
                        alt="Two figures"
                    />

                    <form onSubmit={(event) => Register(event)} className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                                name="email" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="password" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="confPassword" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="register-sign-up">sign up</button>
                    </form> 
                    <p className="register-user-log-in">
                        Already a user? <a href="/login">log in</a>
                    </p>
                </div>
            </Breakpoint>

            <Breakpoint large only>
                <div className="container-register large">
                    <div className="header-register">
                        <img
                            className="nsn-logo-header"
                            src={Logo}
                            alt="nsn header logo"
                        />
                    </div>
                    <img
                        className="big-nsn-image large "
                        src={animatedNsnLogo}
                        alt="Two figures"
                    />

                    <form onSubmit={(event) => Register(event)} className="register-input large">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                                name="email" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="password" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="confPassword" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="register-sign-up">sign up</button>
                    </form> 
                    <p className="register-user-log-in">
                        Already a user? <a href="/login">log in</a>
                    </p>
                </div>
            </Breakpoint>

            <Breakpoint xlarge only>
                <div className="container-register xlarge">
                    <div className="header-register">
                        <img
                            className="nsn-logo-header"
                            src={Logo}
                            alt="nsn header logo"
                        />
                    </div>
                    <img
                        className="big-nsn-image "
                        src={animatedNsnLogo}
                        alt="Two figures"
                    />

                    <form onSubmit={(event) => Register(event)} className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                                name="email" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="password" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="********"
                                type="password"
                                className="register-password"
                                name="confPassword" onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="register-sign-up">sign up</button>
                    </form> 
                    <p className="register-user-log-in">
                        Already a user? <a href="/login">log in</a>
                    </p>
                </div>
            </Breakpoint>
        </div>
    );
}

export default Register;