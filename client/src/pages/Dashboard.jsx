import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { getAttendances, reset } from "../features/attendance/attendanceSlice"
import AttendanceItem from "../Components/AttendanceItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth);
  const {attendance,isLoading,isError,message} = useSelector(
    (state) => state.attendance
  );

  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    if(!user){
      navigate('/login');
    }
    else{
      dispatch(getAttendances()); 
    }

    return () =>{
      dispatch(reset());
    }
  },[user,navigate,dispatch,message,isError]);

  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.userName}</h1>
      <p>Attendance Dashboard</p>
      <button className="btn btn-block" onClick={()=>{navigate('/add')}}>Add Attendance</button>

      <section className="content">
        {Array.isArray(attendance) && attendance.length>0?(
          <div className="attendances">
            {attendance.map((attendance)=>(
              <AttendanceItem key={attendance._id} attendance={attendance}/>
            ))}
          </div>
        ):(
          <h3>You have not added any attendance</h3>
        )}
      </section>
    </section>
    </>
  )
}

export default Dashboard;
