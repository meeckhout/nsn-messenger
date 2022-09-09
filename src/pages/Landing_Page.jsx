import React from 'react';
import { Breakpoint } from 'react-socks'
import {Navbar, Footer} from '../components'
import '../styles/Landing_Page.scss';
import msnLogo from '../assets/images/msnLogo.png';

const Landing_Page = () => {
    return (
        <div>
            <Breakpoint xsmall>
                <Navbar />
                <div className="container-landing xsmall">
                    <div className="tagline">
                        <span className="tagline1-xsmall">Guess who's</span>
                        <span className="tagline2 tagline2-xsmall">back?</span>
                        <button className="btn-xsmall">Get started</button>
                        <button className="btn-xsmall">Log in</button>
                    </div>
                    <img className="msnTest-xsmall" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>

            <Breakpoint small>
                <div className="container-landing small">
                    <Navbar />
                    <div className="tagline">
                        <span className="tagline1-small">Guess who's</span>
                        <span className="tagline2 tagline2-small">back?</span>
                        <button className="btn-small">Get started</button>
                        <button className="btn-small">Log in</button>
                    </div>
                    <img className="msnTest-small" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="container-landing medium">
                    <Navbar />
                    <div className="tagline">
                        <span className="tagline1-medium">Guess who's</span>
                        <span className="tagline2 tagline2-medium">back?</span>
                        <button className="btn-medium">Get started</button>
                        <button className="btn-medium">Log in</button>
                    </div>
                    <img className="msnTest-medium" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="container-landing medium">
                    <Navbar />
                    <div className="tagline">
                        <span className="tagline1-medium">Guess who's</span>
                        <span className="tagline2 tagline2-medium">back?</span>
                        <button className="btn-medium">Get started</button>
                        <button className="btn-medium">Log in</button>
                    </div>
                    <img className="msnTest-medium" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>

            <Breakpoint large>
                <div className="container-landing large">
                    <Navbar />
                    <div className="tagline">
                        <span className="tagline1">Guess who's</span>
                        <span className="tagline2 tagline2">back?</span>
                        <button className="btn-large">Get started</button>
                        <button className="btn-large">Log in</button>
                    </div>
                    <img className="msnTest-large" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>

            <Breakpoint xlarge>
                <div className="container-landing xlarge">
                    <Navbar />
                    <div className="tagline">
                        <span className="tagline1">Guess who's</span>
                        <span className="tagline2 tagline2-xlarge">back?</span>
                        <button className="btn-xlarge">Get started</button>
                        <button className="btn-xlarge">Log in</button>
                    </div>
                    <img className="msnTest-xlarge" src={msnLogo} alt="Two figures"/>
                    <Footer/>
                </div>
            </Breakpoint>
        </div>
    )
}

export default Landing_Page;