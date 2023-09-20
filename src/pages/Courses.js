import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getAllCourses = async () => {
            try {
                const { data } = await axios.get("https://wandering-boa-wear.cyclic.app/courses/");

                setCourses(data)
            } catch (error) {

            }
        }

        getAllCourses();
    },[])

    console.log(courses);
    return (
        <>
            <div className="row">
                {
                    courses.map((course)=> (
                        <>
                        <div className="col-6">
                            <h1>{course.courseName}</h1>
                            <p>{course.maxCapacity}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Courses