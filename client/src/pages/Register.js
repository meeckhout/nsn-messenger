import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Register = () => {
    const [values, setValues] = useState({
        // username: "",
        email: "",
        password: "",
        confPassword: "",
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    // console.log("REGchicken");
    // console.log(process.env.REACT_APP_KEY);

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_KEY)) {
            // console.log("REGcow");
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

    const validateRegistration = () => {
        const { email, password, confPassword} = values;
        if (password !== confPassword) {
            setMsg("Password and confirmation password do not match");
          return false;
        } else if (!email || !validateEmail(email)) {
            setMsg("Enter a valid email address");
        // } else if (!username || username.length < 3) {
        //     setMsg("Username should be greater than 3 characters");
        //   return false;
        } else if (!password || password.length < 8) {
            setMsg("Password should be equal or greater than 8 characters");
          return false;
        } 
        return true;
    };
 
    const Register = async (event) => {
        event.preventDefault();
        try {
            if (validateRegistration()) {
                const { email, password, confPassword} = values;
                await axios.post('http://localhost:3001/register', {
                    // username,
                    email,
                    password,
                    confPassword
                });
                // console.log("REGturkey");
                navigate("/");
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
                            <form onSubmit={(event) => Register(event)} className="box">
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
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="********" name="confPassword" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">Register</button>
                                </div>
                                <p>Already registered? <span><a href="/">Click here.</a></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register;