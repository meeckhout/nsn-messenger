import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import {Login, Dashboard, Chatbox, Register, About, Landing_Page} from './pages';



function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <BreakpointProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="about" element={<About />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/chatbox" element={<Chatbox />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>
            </BreakpointProvider>
        </div>
    );
}

export default App;