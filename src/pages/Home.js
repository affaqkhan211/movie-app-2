import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("https://wandering-boa-wear.cyclic.app/signin/getAllUsers");
        setStudents(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    getAllUsers()
  },[])

  console.log(students);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Students</h1>
        <div className="row">
          {
            students.map((student)=> (
              <>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h1>{student.firstName}</h1>
                  <h3>{student.lastName}</h3>
                  <h5>{student.age}</h5>
                  <p>{student.schoolName}</p>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home