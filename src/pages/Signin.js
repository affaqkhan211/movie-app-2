import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const formData = {email, password}
  const submitForm = async () => {
    try {
      await axios.post("https://wandering-boa-wear.cyclic.app/signin/", formData);

      navigate("/")
      
    } catch (error) {
      if (error.response) {
        alert(`${error.response.data.message}`);
      } else if (error.request) {
        alert("Request was made but no response received");
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        alert("Request setup error");
        console.error("Error", error.message);
      }
    }
  }
  

  return (
    <>
      <div className="container">
      <h1 className='text-center'>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = {email} onChange={(e) => setEmail(e.target.value)}/>

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button class="btn btn-primary" onClick={submitForm}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Signin