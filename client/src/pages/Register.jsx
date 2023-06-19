import { useState,useEffect } from "react";
import { FaUser } from "react-icons/fa";


const Register = () => {

  const [formData,setFormData]= useState({
    userName: '',
    password: ''
  });

  const {userName,password} = formData;

  const onChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onSubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <>
    <section className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type="text" className="form-control" id='userName' name='userName' value={userName}
         placeholder="Enter your UserName" onChange={(e)=>onChange(e)} />
        </div>
        <div className="form-group">
        <input type="password" className="form-control" id='password' name='password' value={password}
         placeholder="Enter your password" onChange={onChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register;
