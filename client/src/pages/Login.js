import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
    const [values, setValues] = useState({
        // username: "",
        email: "",
        password: "",
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    // console.log("LOGchicken");
    // console.log(process.env.REACT_APP_KEY);

    useEffect(() => {
        // console.log("LOGcat");
        if (localStorage.getItem(process.env.REACT_APP_KEY)) {
            // console.log("LOGcow");
            navigate("/dashboard");
        }
    },[navigate]);

    const handleChange = (event) => {
        setMsg("");
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateLogin = () => {
        const { email, password } = values;
        // if (!username || username.length < 3) {
        //     setMsg("Username should be greater than 3 characters");
        //   return false;
        // }
        if (!email || !validateEmail(email)) {
            setMsg("Email has no valid format");
          return false;
        } else if (!password || password.length < 8) {
            setMsg("Password should be equal or greater than 8 characters");
          return false;
        } 
        return true;
    };
 
    const Login = async (event) => {
        event.preventDefault();
        try {
            if (validateLogin()) {
                const { email, password} = values;
                await axios.post('http://localhost:3001/login', {
                    // username,
                    email,
                    password,
                });
                // Store username in local storage & navigate to dashboard
                localStorage.setItem(process.env.REACT_APP_KEY, email);
                localStorage.setItem(process.env.REACT_APP_STATUS, true);
                // console.log("horse");
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={(event) => Login(event)} className="box">
                                {msg && <p className="has-text-centered">{msg}</p>}
                                {/* <div className="field mt-5">
                                    <label className="label">Username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div> */}
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="********" name="password" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">Login</button>
                                </div>
                                <p>Not yet registered? <span><a href="/register">Click here.</a></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login;