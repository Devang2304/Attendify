import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.auth);

  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[user,navigate])
  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.userName}</h1>
      <p>Attendance Dashboard</p>
    </section>
    </>
  )
}

export default Dashboard;
