import React, { useEffect } from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {registerfunction} from "../services/Apis";


const Dashboard = () => {


  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:"",
    password:""
  });


  

  // setinputvalue
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }


  // register data
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fname,email,password} = inputdata;

    if(fname === ""){
      toast.error("Enter Your Name")
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
      const response = await registerfunction(inputdata);
      
      if(response.status === 200){
        setInputdata({...inputdata,fname:"",email:"",password:""});
        navigate("/")
      }else{
        toast.error(response.response.data.error);
      }
    }
  }

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    

    <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Listing API Data Form</h1>
            <p style={{textAlign:"center"}}>Please fill the form using Weshare for Travel and Stays</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Tittle</label>
              <input type="text" name="text" id="" onChange={handleChange} placeholder='Enter Tittle' />
            </div>
            <div className="form_input">
              <label htmlFor="text">Description</label>
              <input type="text" name="text" id=""  onChange={handleChange}  placeholder='Enter Your Description ' />
            </div>

            <div className="form_input">
              <label htmlFor="text">PhoneNumber</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your PhoneNumber ' />
            </div>


            <div className="form-input">
            <label htmlFor="text">Click to </label>
  <label htmlfor="image-upload">Select Images:</label>
  <input id="image-upload" type="file" name="images[]" multiple class="form-control-file"/>
</div>


<div className="form_input">
              <label htmlFor="text">BasePrice</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your BasePrice ' />
            </div>

            <div className="form_input">
              <label htmlFor="text">Number OF Guests</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your Number OF Guests ' />
            </div>
            

            <div className="form_input">
              <label htmlFor="text">Price per each additional guests</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your Price per each additional guests ' />
            </div>

            <div className="form_input">
              <label htmlFor="text">Minimum number of hours per reservation</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your Minimum number of hours per reservation ' />
            </div>

            <div className="form_input">
              <label htmlFor="text">Maximum number of hours per reservation</label>
              <input type="number" name="number" id=""  onChange={handleChange}  placeholder='Enter Your Maximum number of hours per reservation' />
            </div>

            <div class="form-group">
  <label for="start-time">Start Time</label>
  <div class="input-group date" id="start-time-picker" data-target-input="nearest">
    <input type="text" name="start_time" id="start-time" class="form-control datetimepicker-input" data-target="#start-time-picker"/>
    <div class="input-group-append" data-target="#start-time-picker" data-toggle="datetimepicker">
      <div class="input-group-text"><i class="fas fa-clock"></i></div>
    </div>
  </div>
</div>

<div class="form-group">
  <label for="end-time">End Time</label>
  <div class="input-group date" id="end-time-picker" data-target-input="nearest">
    <input type="text" name="end_time" id="end-time" class="form-control datetimepicker-input" data-target="#end-time-picker"/>
    <div class="input-group-append" data-target="#end-time-picker" data-toggle="datetimepicker">
      <div class="input-group-text"><i class="fas fa-clock"></i></div>
    </div>
  </div>
</div>







<div className="form_input">
<label for="start-time">Start Date</label>
<div class="date-picker-input">
  <input type="date" id="select-date"/></div>

</div>


<div className="form_input">
<label for="start-time">End Date</label>
<div class="date-picker-input">
  <input type="date" id="select-date"/></div>

</div>


            {/* <div className="form_input">Maximum number of hours per reservation
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' />
              <div className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
              </div>
            </div> */}
            <button className='btn' onClick={handleSubmit}>Submit Form</button>
            <p> </p>
          </form>
        </div>
        <ToastContainer />
      </section>
  )
}

export default Dashboard