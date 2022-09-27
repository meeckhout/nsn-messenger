import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Breakpoint } from 'react-socks';
import '../styles/Chatbox.scss';

const Chatbox = () => {
    return (
        <>
            <breakpoint xsmall only>
                <div className="chatbox-body-xsmall chatbox-body">
                    <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                    <div className="chat-top">
                        <div className="chatbox-top">
                        </div>

                        <div className="profile-top">
                        </div>
                    </div>

                    <div className="chat-bottom">
                        <div className="chatbox-bottom">
                        </div>

                       <div className="profile-bottom">
                       </div>
                    </div>
                </div>
            </breakpoint>

        <breakpoint small only>
            <div className="chatbox-body chatbox-body-small">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top">
                    <div className="chatbox-top">
                    </div>

                    <div className="profile-top">
                    </div>
                </div>

                <div className="chat-bottom">
                    <div className="chatbox-bottom">
                    </div>

                    <div className="profile-bottom">
                    </div>
                </div>
            </div>
        </breakpoint>

        <breakpoint medium only>
            <div className="chatbox-body chatbox-body-medium">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top">
                    <div className="chatbox-top">
                    </div>

                    <div className="profile-top">
                    </div>
                </div>

                <div className="chat-bottom">
                    <div className="chatbox-bottom">
                    </div>

                    <div className="profile-bottom">
                    </div>
                </div>
            </div>
        </breakpoint>

        <breakpoint large only>
            <div className="chatbox-body chatbox-body-large">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top">
                    <div className="chatbox-top">
                    </div>

                    <div className="profile-top">
                    </div>
                </div>

                <div className="chat-bottom">
                    <div className="chatbox-bottom">
                    </div>

                    <div className="profile-bottom">
                    </div>
                </div>
            </div>
        </breakpoint>

        <breakpoint xlarge only>
            <div className="chatbox-body">
                <img className="chatbox-logo" src={Logo} alt="Logo NSN" />

                <div className="chat-top chat-top-xlarge">
                    <div className="chatbox-top chatbox-top-xlarge">
                    </div>

                    <div className="profile-top profile-top-xlarge">
                    </div>
                </div>

                <div className="chat-bottom chat-bottom-xlarge">
                    <div className="chatbox-bottom chatbox-bottom-large">
                    </div>

                    <div className="profile-bottom profile-bottom-xlarge">
                    </div>
                </div>
            </div>
        </breakpoint>
        </>
    )
}

export default Chatbox;