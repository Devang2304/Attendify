import React from "react";
import './signup.css';

const Signup = () => {
    return (
        <div className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>Sign up</h2>
                <div className="inputBox">
                <input type="text"  required="required" />
                <span>Create Username</span>
                <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required="required" />
                    <span>Create Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Sign up</a>
                </div>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    )
}

export default Signup;