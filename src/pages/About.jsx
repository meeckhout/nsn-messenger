import React from 'react';
import '../styles/About.scss';
import {Navbar, Footer, LastFmData} from '../components'
import {Breakpoint} from 'react-socks';
import NmJgg from '../assets/images/NmJgg.jpg';
import NmJggM from '../assets/images/NmJggM.jpg';
import sanderrr from '../assets/images/sanderrr.jpg';

class About extends React.Component {
    state = { showing: true };
    render() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const onClick = () => console.log('hi');
    console.log(process.env.REACT_APP_API_KEY);
    console.log('monkey');
    const { showing } = this.state;

    return (
        <>
            <Breakpoint xsmall>
                <div className="about-container">
                    <Navbar />
                    <div className="title title-xsmall">
                        <h1>
                            The
                            <span className="alt alt-xsmall">Nostalgia Network</span>
                            team
                        </h1>
                    </div>
                    <div className="about-img flex-col">
                        <img className="img-team img-team-xsmall" src={NmJgg} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-xsmall" src={NmJggM} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-xsmall" src={sanderrr} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-xsmall" src={NmJgg} alt="Team member" />
                        <span className="bio bio-small"></span>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint small>
                <div className="about-container">
                    <Navbar />
                    <div className="title title-small">
                        <h1>
                            The
                            <span className="alt alt-small">Nostalgia Network</span>
                            team
                        </h1>
                    </div>
                    <div className="about-img flex-col">
                        <img className="img-team img-team-small" src={NmJgg} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-small" src={NmJggM} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-small" src={sanderrr} alt="Team member" />
                        <span className="bio bio-small"></span>
                        <img className="img-team img-team-small" src={NmJgg} alt="Team member" />
                        <span className="bio bio-small"></span>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint medium>
                <div className="about-container">
                    <Navbar />
                    <div className="title title-medium">
                        <h1>
                            The
                            <span className="alt alt-medium">Nostalgia Network</span>
                            team
                        </h1>
                    </div>
                    <div className="about-img">
                        <img className="img-team img-team-medium" src={NmJgg} alt="Team member" />
                        <span className="bio bio-medium"></span>
                        <img className="img-team img-team-medium" src={NmJggM} alt="Team member" />
                        <span className="bio bio-medium"></span>
                        <img className="img-team img-team-medium" src={sanderrr} alt="Team member" />
                        <span className="bio bio-medium"></span>
                        <img className="img-team img-team-medium" src={NmJgg} alt="Team member" />
                        <span className="bio bio-medium"></span>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint large>
                <div className="about-container">
                    <Navbar />
                    <div className="title title-large">
                        <h1>
                            The
                            <span className="alt alt-large">Nostalgia Network</span>
                            team
                        </h1>
                    </div>
                    <div className="about-img">
                        <img className="img-team img-team-large" src={NmJgg} alt="Team member" />
                        <span className="bio bio-large"></span>
                        <img className="img-team img-team-large" src={NmJggM} alt="Team member" />
                        <span className="bio bio-large"></span>
                        <img className="img-team img-team-large" src={sanderrr} alt="Team member" />
                        <span className="bio bio-large"></span>
                        <img className="img-team img-team-large" src={NmJgg} alt="Team member" />
                        <span className="bio bio-large"></span>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>

            <Breakpoint xlarge>
                <div className="about-container">
                    <Navbar />
                    <div className="title title-xlarge">
                        <h1>
                            The
                            <span className="alt alt-xlarge">Nostalgia Network</span>
                            team
                            <br/>
                            <span className="player">Choose Your Player!</span>
                        </h1>

                    </div>
                    <div className="about-img">
                        <div className="bio-team Franziska Franziska-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJgg} alt="Team member" />
                            <span className="bio bio-xlarge">Franziska</span>
                            <span className="text">
                                Bacon ipsum dolor amet tri-tip kielbasa prosciutto ribeye alcatra.
                                Doner pork chop shank ham hock, buffalo filet mignon bresaola strip steak biltong meatball.
                            </span>
                        </div>

                        <div className="bio-team Marthe Marthe-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJggM} alt="Team member" />
                            <span className="bio bio-xlarge">Master of Disaster and Design</span>
                            <button onClick={() => this.setState({ showing: !showing })}>add music</button>
                            { showing
                                ? <div className="lastfm">
                                    <LastFmData
                                        userName={'pityparty-'}
                                        apiKey={'$apiKey'}
                                    />
                                </div>
                                : null
                            }

                            <span className="text">
                                Bacon ipsum dolor amet tri-tip kielbasa prosciutto ribeye alcatra.
                                Doner pork chop shank ham hock, buffalo filet mignon bresaola strip steak biltong meatball.
                            </span>
                        </div>

                        <div className="bio-team Sander Sander-xlarge">
                            <img className="img-team img-team-xlarge" src={sanderrr} alt="Team member" />
                            <span className="bio bio-xlarge">The Dork Lord</span>
                            <span className="text">
                                Bacon ipsum dolor amet tri-tip kielbasa prosciutto ribeye alcatra.
                                Doner pork chop shank ham hock, buffalo filet mignon bresaola strip steak biltong meatball.
                            </span>
                        </div>

                        <div className="bio-team Gio Gio-xlarge">
                            <img className="img-team img-team-xlarge" src={NmJgg} alt="Team member" />
                            <span className="bio bio-xlarge">Giovanni</span>
                            <span className="text">
                                Bacon ipsum dolor amet tri-tip kielbasa prosciutto ribeye alcatra.
                                Doner pork chop shank ham hock, buffalo filet mignon bresaola strip steak biltong meatball.
                            </span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Breakpoint>
        </>
    )
}
}

export default About;