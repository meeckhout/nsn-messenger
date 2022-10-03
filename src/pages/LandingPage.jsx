import React from 'react';
import { Breakpoint } from 'react-socks'
import {Navbar, Footer} from '../components'
import '../styles/LandingPage.scss';
import msnLogo from '../assets/images/msnLogo.png';
import {Link} from "react-router-dom";

const Landing_Page = () => {
    return (
        <div className="landing-body">
            <Breakpoint xsmall>
                <Navbar />
                <div className="container-landing xsmall">
                    <div className="tagline tagline-xsmall">
                        <span className="tagline1-xsmall">Guess who's</span>
                        <span className="tagline2 tagline2-xsmall">back?</span>
                        <div className="landing-button">
                            <Link to="/Register">
                                <button className="btn-xsmall">Get started ⟶</button>
                            </Link>
                            <Link to="/Login">
                                <button className="btn-xsmall btn-log-in-xsmall">Log in</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-nsn-image">
                        <img className="msnTest-xsmall" src={msnLogo} alt="Two figures" />
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint small>
                <div className="container-landing small">
                    <Navbar />
                    <div className="tagline tagline-small">
                        <span className="tagline1-small">Guess who's</span>
                        <span className="tagline2 tagline2-small">back?</span>
                        <div className="landing-button">
                            <Link to="/Register">
                                <button className="btn-small">Get started ⟶</button>
                            </Link>
                            <Link to="/Login">
                                <button className="btn-small btn-log-in-small">Log in</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-nsn-image">
                        <img className="msnTest-small" src={msnLogo} alt="Two figures" />
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="container-landing medium">
                    <Navbar />
                    <div className="tagline tagline-medium">
                        <span className="tagline1-medium">Guess who's</span>
                        <span className="tagline2 tagline2-medium">back?</span>
                        <div className="landing-button">
                            <Link to="/Register">
                                <button className="btn-medium">Get started ⟶</button>
                            </Link>
                            <Link to="/Login">
                                <button className="btn-medium btn-log-in-medium">Log in</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-nsn-image">
                        <img className="msnTest-medium" src={msnLogo} alt="Two figures" />
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint large>
                <div className="container-landing large">
                    <Navbar />
                    <div className="tagline tagline-large">
                        <span className="tagline1">Guess who's</span>
                        <span className="tagline2 tagline2-large">back?</span>
                        <div className="landing-button">
                            <Link to="/Register">
                                <button className="btn-large">Get started ⟶</button>
                            </Link>
                            <Link to="/Login">
                                <button className="btn-large btn-log-in-large">Log in</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-nsn-image">
                        <img className="msnTest-large" src={msnLogo} alt="Two figures" />
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint xlarge>
                <div className="container-landing xlarge">
                    <Navbar />
                    <div className="tagline tagline-xlarge">
                        <span className="tagline1">Guess who's</span>
                        <span className="tagline2 tagline2-xlarge">back?</span>
                        <div className="landing-button">
                            <Link to="/Register">
                                <button className="btn-xlarge">Get started ⟶</button>
                            </Link>
                            <Link to="/Login">
                                <button className="btn-xlarge btn-log-in">Log in</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-nsn-image">
                        <img className="msnTest-xlarge" src={msnLogo} alt="Two figures" />
                    </div>
                    <Footer />
                </div>
            </Breakpoint>
        </div>
    );
}

export default Landing_Page;