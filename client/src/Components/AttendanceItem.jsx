import { useDispatch } from 'react-redux';
import { deleteAttendance } from '../features/attendance/attendanceSlice';
import { Link } from "react-router-dom";
function AttendanceItem({ attendance }) {
  const dispatch = useDispatch();
  return (
    <div className="attendance">
        <h2>Subject: {attendance.subjectName}</h2>
        <h2>Lecture Attended: {attendance.lectureAttended}</h2>
        <h2>Total Lectures: {attendance.totalLectures}</h2>
        <h2>Attendance: {attendance.attendance}%</h2>
        <Link to={`/edit/${attendance._id}`}>
        <button className="btn_attendance_item">Update</button>
        </Link>
        <button onClick={()=> dispatch(deleteAttendance(attendance._id))} className="close">X</button>
    </div>
  )
}

export default AttendanceItem