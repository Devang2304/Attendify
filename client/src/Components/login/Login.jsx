import {React,useState} from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {


    const navigate=useNavigate();

    const [user,setUser] = useState({
        userName:"",
        password:""
    });

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
        console.log("User Login:",user);
    }

    return (
        <div className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>Sign in</h2>
                <div className="inputBox">
                <input type="text" name="userName" value={user.userName} onChange={handleChange} required  />
                <span>Username</span>
                <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" value={user.password} onChange={handleChange} required  />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Forgot Passsword</a>
                    <button className="bt" onClick={()=>(navigate('/signup'))} >Signup</button>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;