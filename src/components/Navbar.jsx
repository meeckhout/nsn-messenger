import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import Logo from '../assets/images/Logo.png';
import { Breakpoint } from 'react-socks'

const Navbar = () => {
    return (
        <>
            <Breakpoint xsmall only>
                <div className="container">
                    <div className="navbar-xsmall navbar">
                        <Link to="/">
                            <img className="img img-xsmall" src={Logo} alt="NSN Messenger"/>
                        </Link>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint small only>
                <div className="container">
                    <div className="navbar-xsmall navbar">
                        <img className="img img-xsmall" src={Logo} alt="NSN Messenger"/>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint medium only>
                <div className="container">
                    <div className="navbar-xsmall navbar">
                        <img className="img img-xsmall" src={Logo} alt="NSN Messenger"/>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint large only>
                <div className="container">
                    <div className="navbar-large navbar">
                        <img className="img img-xlarge" src={Logo} alt="NSN Messenger"/>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint xlarge only>
                <div className="container">
                    <div className="navbar-xlarge navbar">
                        <Link to="/">
                            <img className="img img-xlarge" src={Logo} alt="NSN Messenger"/>
                        </Link>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Breakpoint>
        </>
    )
}

export {Navbar};