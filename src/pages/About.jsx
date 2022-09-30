import React from 'react';
import '../styles/About.scss';
import {Navbar, Footer} from '../components'
import {Breakpoint} from 'react-socks';
import NmJgg from '../assets/images/NmJgg.jpg';
import NmJggM from '../assets/images/NmJggM.jpg';
import sanderrr from '../assets/images/sanderrr.jpg';

const About = () => {
    return (
        <>
            <Breakpoint xsmall>
                <div className="about-container about-container-xsmall">
                    <Navbar />
                    <div className="title title-xsmall">
                        <h1>
                            The
                            <span className="alt alt-xsmall">Nostalgia Network</span>
                            team
                            <br />
                            <span className="player">Choose Your Player!</span>
                        </h1>
                    </div>
                    <div className="about-img flex-col">

                        <div className="bio-team Franziska Franziska-xsmall">
                            <img className="img-team img-team-xsmall" src={NmJgg} alt="Team member" />
                            <span className="bio bio-small">Her name shall not be known !!</span>
                            <span className="text">Working from the shadows she gives live to all the dead projects! </span>
                        </div>
                        <div className="bio-team Marthe Marthe-xsmall">
                            <img className="img-team img-team-xsmall" src={NmJggM} alt="Team member" />
                            <span className="bio bio-small">Master of Disaster and Design</span>
                            <span className="text">She will come for ur design and u will never look at it the same way again!! Ps: Don't say here code is ..Messy !!!</span>
                        </div>
                        <div className="bio-team Sander Sander-xsmall">
                            <img className="img-team img-team-xsmall" src={sanderrr} alt="Team member" />
                            <span className="bio bio-small">The Dork Lord</span>
                            <span className="text">Alone in his dungeon he sits and creates all his creature's(3d models) </span>
                        </div>
                        <div className="bio-team Gio Gio-xsmall">
                            <img className="img-team img-team-xsmall" src={NmJgg} alt="Team member" />
                            <span className="bio bio-small">The Joker</span>
                            <span className="text">His code may or may not work but his jokes are SPOT ON!!</span>
                        </div>

                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint small>
                <div className="about-container about-container-small">
                    <Navbar />
                    <div className="title title-small">
                        <h1>
                            The
                            <span className="alt alt-small">Nostalgia Network</span>
                            team
                            <br />
                            <span className="player">Choose Your Player!</span>
                        </h1>
                    </div>
                    <div className="about-img flex-col">

                        <div className="bio-team Franziska Franziska-small">
                            <img className="img-team img-team-small" src={NmJgg} alt="Team member" />
                            <span className="bio bio-small">Her name shall not be known !!</span>
                            <span className="text">Working from the shadows she gives live to all the dead projects! </span>
                        </div>
                        <div className="bio-team Marthe Marthe-small">
                            <img className="img-team img-team-small" src={NmJggM} alt="Team member" />
                            <span className="bio bio-small">Master of Disaster and Design</span>
                            <span className="text">She will come for ur design and u will never look at it the same way again!! Ps: Don't say here code is ..Messy !!!</span>
                        </div>
                        <div className="bio-team Sander Sander-small">
                            <img className="img-team img-team-small" src={sanderrr} alt="Team member" />
                            <span className="bio bio-small">The Dork Lord</span>
                            <span className="text">Alone in his dungeon he sits and creates all his creature's(3d models) </span>
                        </div>
                        <div className="bio-team Gio Gio-small">
                            <img className="img-team img-team-small" src={NmJgg} alt="Team member" />
                            <span className="bio bio-small">The Joker</span>
                            <span className="text">His code may or may not work but his jokes are SPOT ON!!</span>
                        </div>

                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="about-container about-container-medium">
                    <Navbar />
                    <div className="title title-medium">
                        <h1>
                            The
                            <span className="alt alt-medium">Nostalgia Network</span>
                            team
                            <br />
                            <span className="player">Choose Your Player!</span>
                        </h1>
                    </div>
                    <div className="about-img">

                        <div className="bio-team Franziska Franziska-medium">
                            <img className="img-team img-team-medium" src={NmJgg} alt="Team member" />
                            <span className="bio bio-medium">Her name shall not be known !!</span>
                            <span className="text">Working from the shadows she gives live to all the dead projects! </span>
                        </div>
                        <div className="bio-team Marthe Marthe-medium">
                            <img className="img-team img-team-medium" src={NmJggM} alt="Team member" />
                            <span className="bio bio-medium">Master of Disaster and Design</span>
                            <span className="text">She will come for ur design and u will never look at it the same way again!! Ps: Don't say here code is ..Messy !!!</span>
                        </div>
                        <div className="bio-team Sander Sander-medium">
                            <img className="img-team img-team-medium" src={sanderrr} alt="Team member" />
                            <span className="bio bio-medium">The Dork Lord</span>
                            <span className="text">Alone in his dungeon he sits and creates all his creature's(3d models) </span>
                        </div>
                        <div className="bio-team Gio Gio-medium">
                            <img className="img-team img-team-medium" src={NmJgg} alt="Team member" />
                            <span className="bio bio-medium">The Joker</span>
                            <span className="text">His code may or may not work but his jokes are SPOT ON!!</span>
                        </div>

                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint large>
                <div className="about-container about-container-large">
                    <Navbar />
                    <div className="title title-large">
                        <h1>
                            The
                            <span className="alt alt-large">Nostalgia Network</span>
                            team

                            <br />

                            <span className="player">Choose Your Player!</span>
                        </h1>
                    </div>
                    <div className="about-img">

                        <div className="bio-team Franziska Franziska-large">
                            <img className="img-team img-team-large" src={NmJgg} alt="Team member" />
                            <span className="bio bio-large">Her name shall not be known !!</span>
                            <span className="text">Working from the shadows she gives live to all the dead projects! </span>
                        </div>
                        <div className="bio-team Marthe Marthe-large">
                            <img className="img-team img-team-large" src={NmJggM} alt="Team member" />
                            <span className="bio bio-large">Master of Disaster and Design</span>
                            <span className="text">She will come for ur design and u will never look at it the same way again!! Ps: Don't say here code is ..Messy !!!</span>
                        </div>
                        <div className="bio-team Sander Sander-large">
                            <img className="img-team img-team-large" src={sanderrr} alt="Team member" />
                            <span className="bio bio-large">The Dork Lord</span>
                            <span className="text">Alone in his dungeon he sits and creates all his creature's(3d models) </span>
                        </div>
                        <div className="bio-team Gio Gio-large">
                            <img className="img-team img-team-large" src={NmJgg} alt="Team member" />
                            <span className="bio bio-large">The Joker</span>
                            <span className="text">His code may or may not work but his jokes are SPOT ON!!</span>
                        </div>

                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint xlarge>
                <div className="about-container about-container-xlarge">
                    <Navbar />
                    <div className="title title-xlarge">
                        <h1>
                            The
                            <span className="alt alt-xlarge">Nostalgia Network</span>
                            team
                            <br />
                            <span className="player">Choose Your Player!</span>
                        </h1>
                    </div>
                    <div className="about-img">
                        <div className="bio-team Franziska Franziska-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJgg} alt="Team member" />
                            <span className="bio bio-xlarge">Her name shall not be known !!</span>
                            <span className="text">Working from the shadows she gives live to all the dead projects! </span>

                        </div>

                        <div className="bio-team Marthe Marthe-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJggM} alt="Team member" />
                            <span className="bio bio-xlarge">Master of Disaster and Design</span>


                            <span className="text">She will come for ur design and u will never look at it the same way again!! Ps: Don't say here code is ..Messy !!!</span>

                        </div>

                        <div className="bio-team Sander Sander-xlarge">
                            <img className="img-team img-team-xlarge" src={sanderrr} alt="Team member" />
                            <span className="bio bio-xlarge">The Dork Lord</span>

                            <span className="text">Alone in his dungeon he sits and creates all his creature's(3d models) </span>

                        </div>

                        <div className="bio-team Gio Gio-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJgg} alt="Team member" />

                            <span className="bio bio-xlarge">The Joker</span>
                            <span className="text">His code may or may not work but his jokes are SPOT ON!!.</span>

                        </div>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>
        </>
    );
}

export default About;