import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import {Login, Dashboard, Chatbox, Register, About, Landing_Page} from './pages';

function App() {
    return (
        <div className="App">
            <BreakpointProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="About" element={<About />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Chatbox" element={<Chatbox />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>
            </BreakpointProvider>
        </div>
    );
}

export default App;