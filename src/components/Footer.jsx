import React from 'react';
import '../styles/Footer.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { Breakpoint } from 'react-socks'

const Footer = () => {
    const Today = new Date();

    return(
        <>
            <Breakpoint xsmall only>
                <div className="soc-med soc-med-xsmall">
                    <FaFacebookF />
                    <AiFillInstagram />
                    <FaTwitter />
                </div>
                <div className="footer footer-xsmall">
                    <span>
                       ©{Today.getFullYear()} The Nostalgia Network
                    </span>
                </div>
            </Breakpoint>

            <Breakpoint large only>
                <div className="soc-med soc-med-large">
                    <FaFacebookF />
                    <AiFillInstagram />
                    <FaTwitter />
                </div>
                <div className="footer footer-large">
                    <span>
                       ©{Today.getFullYear()} The Nostalgia Network
                    </span>
                </div>
            </Breakpoint>

            <Breakpoint xlarge only>
                <div className="soc-med soc-med-xlarge">
                    <FaFacebookF />
                    <AiFillInstagram />
                    <FaTwitter />
                </div>
                <div className="footer footer-xlarge">
                    <span>
                       ©{Today.getFullYear()} The Nostalgia Network
                    </span>
                </div>
            </Breakpoint>
        </>
    )
}

export {Footer};