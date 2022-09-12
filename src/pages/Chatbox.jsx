import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Breakpoint } from 'react-socks';
import '../styles/Chatbox.scss';

const Chatbox = () => {
    return (
        <>
            <div className="container-logo">
                <img src={ Logo } alt="Logo NSN"/>
            </div>
            <div className="container-toolbar">

            </div>

            <Breakpoint xsmall only>
                <main >
                    <div className="chat-display-xsmall">

                    </div>
                    <div className="fried-profile-xsmall">
                        <div className="friend-profile-outer-xsmall"></div>
                        <div className="friend-profile-inner-xsmall"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow-xsmall">
                        <div className="footer-menu-xsmall"></div>
                        <input className="footer-tekst-xsmall" type="text"/>
                        <div className="footer-message-xsmall"></div>
                    </div>
                    <div className="self-profile-xsmall">
                        <div className="self-profile-outer-xsmall"></div>
                        <div className="self-profile-inner-xsmall"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint small only>
                <main >
                    <div className="chat-display-small">

                    </div>
                    <div className="fried-profile-small">
                        <div className="friend-profile-outer-small"></div>
                        <div className="friend-profile-inner-small"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow-small">
                        <div className="footer-menu-small"></div>
                        <input className="footer-tekst-small" type="text"/>
                        <div className="footer-message-small"></div>
                    </div>
                    <div className="self-profile-small">
                        <div className="self-profile-outer-small"></div>
                        <div className="self-profile-inner-small"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint medium only>
                <main >
                    <div className="chat-display-medium">

                    </div>
                    <div className="fried-profile-medium">
                        <div className="friend-profile-outer-medium"></div>
                        <div className="friend-profile-inner-medium"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow-medium">
                        <div className="footer-menu-medium"></div>
                        <input className="footer-tekst-medium" type="text"/>
                        <div className="footer-message-medium"></div>
                    </div>
                    <div className="self-profile-medium">
                        <div className="self-profile-outer-medium"></div>
                        <div className="self-profile-inner-medium"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint large only>
                <main >
                    <div className="chat-display-large">

                    </div>
                    <div className="fried-profile-large">
                        <div className="friend-profile-outer-large"></div>
                        <div className="friend-profile-inner-large"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow-large">
                        <div className="footer-menu-large"></div>
                        <input className="footer-tekst-large" type="text"/>
                        <div className="footer-message-large"></div>
                    </div>
                    <div className="self-profile-large">
                        <div className="self-profile-outer-large"></div>
                        <div className="self-profile-inner-large"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint xlarge only>
                <main >
                    <div className="chat-display-xlarge">

                    </div>
                    <div className="fried-profile-xlarge">
                        <div className="friend-profile-outer-xlarge"></div>
                        <div className="friend-profile-inner-xlarge"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow-xlarge">
                        <div className="footer-menu-xlarge"></div>
                        <input className="footer-tekst-xlarge" type="text"/>
                        <div className="footer-message-xlarge"></div>
                    </div>
                    <div className="self-profile-xlarge">
                        <div className="self-profile-outer-xlarge"></div>
                        <div className="self-profile-inner-xlarge"></div>
                    </div>
                </footer>
            </Breakpoint>

        </>
    )
}

export default Chatbox;