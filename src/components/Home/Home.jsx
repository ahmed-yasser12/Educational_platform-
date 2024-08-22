import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Home.module.css"
import Courses from '../Courses/Courses'
export default function Home() {
  return <>
  
  <div className={`${Styles.HomePage} vh-100 d-flex align-items-center justify-content-start`}>
        
        <div className="px-4 text-white">
          <h1>Lorem, ipsum dolo.</h1>
          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            repudiandae!
          </p>
          <div className="mt-4">
            <Link>
              <button className="btn btn-danger mx-2"> Enroll Now </button>
            </Link>
            <Link to={"/EducationalCourses"}>
              <button className={`btn btn-transparent text-white rounded border-white`}> check courses </button>
            </Link>
            
          </div>
        </div>
     </div>

  <Courses/>
  
  </>
}
