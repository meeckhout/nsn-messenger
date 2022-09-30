import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import {Login, Dashboard, Chatbox, Register, About, Landing_Page} from './pages';

function App() {

    let loggedIn;
    if(localStorage.getItem(process.env.REACT_APP_STATUS)) {
      loggedIn = localStorage.getItem(process.env.REACT_APP_STATUS);
    } else {
      loggedIn = false;
    }

    return (
        <div className="App">
            <BreakpointProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="About" element={<About />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Dashboard" element={loggedIn ? (<><Dashboard/></>) : (<Login replace to={"/Login"} />)}/>
                        <Route path="/Chatbox" element={loggedIn ? (<><Chatbox/></>) : (<Login replace to={"/Login"} />)}/>
                    </Routes>
                </Router>
            </BreakpointProvider>
        </div>
    );
}

export default App;