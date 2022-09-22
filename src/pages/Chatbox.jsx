import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Breakpoint } from 'react-socks';
import '../styles/Chatbox.scss';

const Chatbox = () => {
    return (
        <div className="container-body">
            <div className="container-logo">
                <img src={ Logo } alt="Logo NSN"/>
            </div>
            <div className="container-toolbar">
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
            </div>

            <Breakpoint xsmall only>
                <main >
                    <div className="chat-display chat-display-xsmall">

                    </div>
                    <div className="friend-profile friend-profile-xsmall">
                        <div className="friend-profile-outer friend-profile-outer-xsmall"></div>
                        <div className="friend-profile-inner friend-profile-inner-xsmall"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow footer-chatwindow-xsmall">
                        <div className="footer-menu footer-menu-xsmall"></div>
                        <input className="footer-tekst footer-tekst-xsmall" type="text"/>
                        <div className="footer-message footer-message-xsmall"></div>
                    </div>
                    <div className="self-profile self-profile-xsmall">
                        <div className="self-profile-outer self-profile-outer-xsmall"></div>
                        <div className="self-profile-inner self-profile-inner-xsmall"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint small only>
                <main >
                    <div className="chat-display chat-display-small">

                    </div>
                    <div className="friend-profile friend-profile-small">
                        <div className="friend-profile-outer friend-profile-outer-small"></div>
                        <div className="friend-profile-inner friend-profile-inner-small"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow footer-chatwindow-small">
                        <div className="footer-menu footer-menu-small"></div>
                        <input className="footer-tekst footer-tekst-small" type="text"/>
                        <div className="footer-message footer-message-small"></div>
                    </div>
                    <div className="self-profile self-profile-small">
                        <div className="self-profile-outer self-profile-outer-small"></div>
                        <div className="self-profile-inner self-profile-inner-small"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint medium only>
                <main >
                    <div className="chat-display chat-display-medium">

                    </div>
                    <div className="friend-profile friend-profile-medium">
                        <div className="friend-profile-outer friend-profile-outer-medium"></div>
                        <div className="friend-profile-inner friend-profile-inner-medium"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow footer-chatwindow-medium">
                        <div className="footer-menu footer-menu-medium"></div>
                        <input className="footer-tekst footer-tekst-medium" type="text"/>
                        <div className="footer-message footer-message-medium"></div>
                    </div>
                    <div className="self-profile self-profile-medium">
                        <div className="self-profile-outer self-profile-outer-medium"></div>
                        <div className="self-profile-inner self-profile-inner-medium"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint large only>
                <main >
                    <div className="chat-display chat-display-large">

                    </div>
                    <div className="friend-profile friend-profile-large">
                        <div className="friend-profile-outer friend-profile-outer-large"></div>
                        <div className="friend-profile-inner friend-profile-inner-large"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow footer-chatwindow-large">
                        <div className="footer-menu footer-menu-large"></div>
                        <input className="footer-tekst footer-tekst-large" type="text"/>
                        <div className="footer-message footer-message-large"></div>
                    </div>
                    <div className="self-profile self-profile-large">
                        <div className="self-profile-outer self-profile-outer-large"></div>
                        <div className="self-profile-inner self-profile-inner-large"></div>
                    </div>
                </footer>
            </Breakpoint>

            <Breakpoint xlarge only>
                <main >
                    <div className="chat-display chat-display-xlarge">

                    </div>
                    <div className="friend-profile friend-profile-xlarge">
                        <div className="friend-profile-outer friend-profile-outer-xlarge"></div>
                        <div className="friend-profile-inner friend-profile-inner-xlarge"></div>
                    </div>
                </main>

                <footer>
                    <div className="footer-chatwindow footer-chatwindow-xlarge">
                        <div className="footer-menu footer-menu-xlarge"></div>
                        <input className="footer-tekst footer-tekst-xlarge" type="text"/>
                        <div className="footer-message footer-message-xlarge"></div>
                    </div>
                    <div className="self-profile self-profile-xlarge">
                        <div className="self-profile-outer self-profile-outer-xlarge"></div>
                        <div className="self-profile-inner self-profile-inner-xlarge"></div>
                    </div>
                </footer>
            </Breakpoint>

        </div>
    )
}

export default Chatbox;