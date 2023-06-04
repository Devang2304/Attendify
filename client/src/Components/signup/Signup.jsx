import React,{useState} from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const navigate = useNavigate();
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
        console.log("User Registration:",user);
    }

    return (
        <div className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>Sign up</h2>
                <div className="inputBox">
                <input type="text" name="userName" value={user.userName} onChange={handleChange}  required />
                <span>Create Username</span>
                <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" value={user.password} onChange={handleChange}  required />
                    <span>Create Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <button className="btsign" onClick={()=>(navigate('/login'))}>Login</button>
                </div>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    )
}

export default Signup;