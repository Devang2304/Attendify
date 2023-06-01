import React from "react";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import HomePage from "./Components/homePage/Homepage"
import AttendanceForm from "./Components/attendanceForm/AttendanceForm";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
const App =()=>{
    return(
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="signup" element={<Signup/>}/>
       <Route path="edit" element={<AttendanceForm/>}/>
       </Routes>
       </BrowserRouter>
    );
}

export default App;