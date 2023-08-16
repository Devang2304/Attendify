import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAttendance } from "../features/attendance/attendanceSlice"


const AttendanceForm = () => {
    const [formValue,setFormValue] = useState('');
    const dispatch=useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createAttendance({formValue}))
        setFormValue('')
    }
  return (
    <section className="form">
        <form onSubmit={onsubmit}>
            <div className="form-group">
                <label htmlFor="text">Subject Name</label>
                <input 
                type="text"
                name="subjectName"
                id="subjectName"
                value={formValue}
                onChange={(e)=>{setFormValue(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label htmlFor="number">lecture Attended</label>
                <input 
                type="number"
                name="lectureAttended"
                id="lectureAttended"
                value={formValue}
                onChange={(e)=>{setFormValue(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label htmlFor="number">total Lectures</label>
                <input 
                type="number"
                name="totalLectures"
                id="totalLectures"
                value={formValue}
                onChange={(e)=>{setFormValue(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add Attendance</button>
            </div>
        </form>
    </section>
  )
}

export default AttendanceForm