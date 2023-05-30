import React from "react";
import './login.css';

const Login = () => {
    return (
        <div className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>Sign in</h2>
                <div className="inputBox">
                <input type="text"  required="required" />
                <span>Username</span>
                <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required="required" />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Forgot Passsword</a>
                    <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;