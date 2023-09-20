import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolContact, setSchoolContact] = useState("");
    const [phone, setPhone] = useState("");

    const formData = { firstName, lastName, password, email, dob, age, schoolName, schoolContact, phone}

    const submitForm = async () => {
      try {
        await axios.post("https://wandering-boa-wear.cyclic.app/signup/", formData);
        navigate("/signin")
      } catch (error) {
        alert("something went wrong in api");
      }
    }
    return (
        <>
            <div className="heading text-center mt-5">
                <h1>Signup</h1>
            </div>
            <div className="container mt-5">
                <form class="row g-3" onSubmit={(e) => e.preventDefault()}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div class="col-6">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputAddress" value = {email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="col-6">
                        <label for="inputAddress2" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputAddress2" value = {password} onChange={(e) => setPassword(e.target.value)}  />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">School Name</label>
                        <input type="text" class="form-control" id="inputCity" value = {schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Age</label>
                        <input type="number" class="form-control" value = {age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">DOB</label>
                        <input type="date" class="form-control" id="inputZip" value = {dob} onChange={(e) => setDob(e.target.value)}/>
                    </div>
                    
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">School Contact</label>
                        <input type="number" class="form-control" id="inputCity" value = {schoolContact} onChange={(e) => setSchoolContact(e.target.value)}/>
                    </div>

                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Phone No</label>
                        <input type="number" class="form-control" id="inputCity" value = {phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" onClick={submitForm}>Signup</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup


