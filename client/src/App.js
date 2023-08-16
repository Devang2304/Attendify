import React from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AttendanceForm from "./Components/AttendanceForm";

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
                </Routes>
            </div>
        </Router>
        <ToastContainer/>
        </>
    )
}

export default App;