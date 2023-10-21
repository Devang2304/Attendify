import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAttendance } from "../features/attendance/attendanceSlice"
import { useNavigate } from "react-router-dom"


const AttendanceForm = () => {

    const defaultValue = {
        subjectName: 'subject',
        lectureAttended:0,
        totalLectures:0,
    }

    const [formValue,setFormValue] = useState(defaultValue);
    const {subjectName,lectureAttended,totalLectures} = formValue;
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const onValueChange=(e)=>{
        setFormValue({...formValue, [e.target.name]:e.target.value});
        // console.log(formValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const attendData = {
        subjectName,
        lectureAttended,
        totalLectures,
        }
        dispatch(createAttendance(attendData))
        // console.log(formValue);
        setFormValue('')
        navigate('/');
    }
  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Subject Name</label>
                <input 
                type="text"
                name="subjectName"
                id="subjectName"
                value={subjectName}
                onChange={(e)=>{onValueChange(e)}}
                />
            </div>
            <div className="form-group">
                <label>lecture Attended</label>
                <input 
                type="number"
                name="lectureAttended"
                id="lectureAttended"
                value={lectureAttended}
                onChange={(e)=>{onValueChange(e)}}
                />
            </div>
            <div className="form-group">
                <label>total Lectures</label>
                <input 
                type="number"
                name="totalLectures"
                id="totalLectures"
                value={totalLectures}
                onChange={(e)=>{onValueChange(e)}}
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