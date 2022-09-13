import React from 'react';
import Logo from "../assets/images/Logo.png";
import msnLogo from "../assets/images/msnLogo.png";
import { Breakpoint } from "react-socks";
import { SiGoogle } from "react-icons/si";
import { RiUser3Fill, RiLockPasswordFill } from "react-icons/ri";
import "../styles/Register.scss";


const Register = () => {
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
                        src={msnLogo}
                        alt="Two figures"
                    />

                    <div className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="password"
                                type="password"
                                className="register-password"
                            />
                        </div>
                    </div>
                    <button className="register-sign-up">sign up</button>
                    <p className="register-user-log-in">
                        Already a user? <a href="#">log in</a>
                    </p>
                    <div className="register-google-sign-up-container">
                        <p className="register-google-sign-up">
                            <SiGoogle className="google-icon" />
                            Sign up with <a href="#">google</a>
                        </p>
                    </div>
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
                        src={msnLogo}
                        alt="Two figures"
                    />

                    <div className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="password"
                                type="password"
                                className="register-password"
                            />
                        </div>
                    </div>
                    <button className="register-sign-up">sign up</button>
                    <p className="register-user-log-in">
                        Already a user? <a href="#">log in</a>
                    </p>
                    <div className="register-google-sign-up-container">
                        <p className="register-google-sign-up">
                            <SiGoogle className="google-icon" />
                            Sign up with <a href="#">google</a>
                        </p>
                    </div>
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
                        src={msnLogo}
                        alt="Two figures"
                    />

                    <div className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="password"
                                type="password"
                                className="register-password"
                            />
                        </div>
                    </div>
                    <button className="register-sign-up">sign up</button>
                    <p className="register-user-log-in">
                        Already a user? <a href="#">log in</a>
                    </p>
                    <div className="register-google-sign-up-container">
                        <p className="register-google-sign-up">
                            <SiGoogle className="google-icon" />
                            Sign up with <a href="#">google</a>
                        </p>
                    </div>
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
                        src={msnLogo}
                        alt="Two figures"
                    />

                    <div className="register-input large">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="password"
                                type="password"
                                className="register-password"
                            />
                        </div>
                    </div>
                    <button className="register-sign-up">sign up</button>
                    <p className="register-user-log-in">
                        Already a user? <a href="#">log in</a>
                    </p>
                    <div className="register-google-sign-up-container">
                        <p className="register-google-sign-up">
                            <SiGoogle className="google-icon" />
                            Sign up with <a href="#">google</a>
                        </p>
                    </div>
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
                        src={msnLogo}
                        alt="Two figures"
                    />

                    <div className="register-input">
                        <div className="register-email-input">
                            <RiUser3Fill className="input-icons" />
                            <input
                                placeholder="e-mail adress"
                                type="text"
                                className="register-mail-adress"
                            />
                        </div>
                        <div className="register-password-input">
                            <RiLockPasswordFill className="input-icons" />
                            <input
                                placeholder="password"
                                type="password"
                                className="register-password"
                            />
                        </div>
                    </div>
                    <button className="register-sign-up">sign up</button>
                    <p className="register-user-log-in">
                        Already a user? <a href="#">log in</a>
                    </p>
                    <div className="register-google-sign-up-container">
                        <p className="register-google-sign-up">
                            <SiGoogle className="google-icon" />
                            Sign up with <a href="#">google</a>
                        </p>
                    </div>
                </div>
            </Breakpoint>
        </div>
    );
}

export default Register;