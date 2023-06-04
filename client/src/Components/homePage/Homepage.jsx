import React from "react";
import './homePage.css';
import { useNavigate } from "react-router-dom";

const HomePage = () =>{
    const navigate =useNavigate();
    return(
        <div>
            <h2 className="homePage">Welcome to<br/>Attendance Tracker</h2>
            <br /><br /><br /><br /><br />
            <div className="getStarted"><button onClick={()=>(navigate('/login'))}><span>Track Now→</span></button></div>
        </div>
    )
}

export default HomePage;