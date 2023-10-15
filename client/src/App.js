import React from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AttendanceForm from "./pages/AttendanceForm";
import EditAttendanceForm from "./pages/editAttendanceForm";

const App = () =>{
    return (
        <>
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/add' element={<AttendanceForm/>}/>
                <Route path='/edit/:id' element={<EditAttendanceForm/>}/>
                </Routes>
            </div>
        </Router>
        <ToastContainer/>
        </>
    )
}

export default App;