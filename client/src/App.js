import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {Register, Login, Dashboard, Chat} from "./pages";
import Navbar from "./components/Navbar";
 
const App= () => {

  let loggedIn;
  if(localStorage.getItem(process.env.REACT_APP_STATUS)) {
    loggedIn = localStorage.getItem(process.env.REACT_APP_STATUS);
  } else {
    loggedIn = false;
  }
  
  return (

      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/dashboard" element={loggedIn ? (<><Navbar/><Dashboard/></>) : (<Login replace to={"/"} />)}/>
        <Route exact path="/chat" element={loggedIn ? (<><Navbar/><Chat/></>) : (<Login replace to={"/"} />)}/>
      </Routes>
  );
}
 
export default App;