import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import {Login, Dashboard, Chatbox, Register, About, Landing_Page} from './pages';



function App() {
    return (
        <div className="App">
            <BreakpointProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/chatbox" element={<Chatbox />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>
            </BreakpointProvider>
        </div>
    );
}

export default App;