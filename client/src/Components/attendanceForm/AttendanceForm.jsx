import React from "react";
import './AttendanceForm.css';

const AttendanceForm = () => {
    return (
        <div  className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>Update Attendance</h2>
                <div className="inputBox">
                <input type="text"  required="required" />
                <span>Subject Name</span>
                <i></i>
                </div>
                <div className="inputBox">
                    <input type="number" required="required" />
                    <span>Lecture Attended</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="number" required="required" />
                    <span>Total Lectures</span>
                    <i></i>
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default AttendanceForm;