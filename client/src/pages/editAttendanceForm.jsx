import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import Spinner from "../Components/Spinner";
import { getSingleAttendance,editAttendance,reset } from "../features/attendance/attendanceSlice"


const EditAttendanceForm = () => {
    const {user} = useSelector((state)=>state.auth);
    const defaultValue = {
        user,
        subjectName: 'a',
        lectureAttended:0,  
        totalLectures:0,
    }
    const [formValue,setFormValue] = useState(defaultValue);
    const {subjectName,lectureAttended,totalLectures} = formValue;
    const navigate = useNavigate();
    const {id}=useParams();
    const dispatch=useDispatch();
    const {attendance,isLoading,isError,message} = useSelector(
        (state) => state.attendance
      );

      useEffect(()=>{
        loadAttendanceDetails();
      },[])

    const loadAttendanceDetails = async ()=>{
      const response = await dispatch(getSingleAttendance(id,user));
      setFormValue({
        subjectName: response.payload.subjectName,
        lectureAttended:response.payload.lectureAttended,  
        totalLectures:response.payload.totalLectures
      });
      console.log("value got from dispatch",response);
      console.log(response.payload.subjectName);
        // dispatch(reset());
    }

    const onValueChange=(e)=>{
        setFormValue({...formValue, [e.target.name]:e.target.value});
        console.log(formValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const EditedattendData = {
        subjectName,
        lectureAttended,
        totalLectures,
        }
        dispatch(editAttendance(id,EditedattendData))
        console.log(formValue);
        // setFormValue('')
        navigate('/');
    }
    if(isLoading){
        return <Spinner/>
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
                value={formValue.subjectName}
                onChange={(e)=>{onValueChange(e)}}
                />
            </div>
            <div className="form-group">
                <label>lecture Attended</label>
                <input 
                type="number"
                name="lectureAttended"
                id="lectureAttended"
                value={formValue.lectureAttended}
                onChange={(e)=>{onValueChange(e)}}
                />
            </div>
            <div className="form-group">
                <label>total Lectures</label>
                <input 
                type="number"
                name="totalLectures"
                id="totalLectures"
                value={formValue.totalLectures}
                onChange={(e)=>{onValueChange(e)}}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Submit</button>
            </div>
        </form>
    </section>
  )
}

export default EditAttendanceForm