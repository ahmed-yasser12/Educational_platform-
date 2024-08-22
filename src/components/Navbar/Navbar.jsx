import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Images/logo-white.svg";
import Styles from "./Navbar.module.css";

function Navbar() {
  return <>
  
  
  <nav className="navbar bg-transparent fixed-top top-0 start-0 end-0 ">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} className="w-50" alt="" />
          </Link>
          <div className="d-flex ">
            <Link to={"/EducationalCourses"}>
            <button className={`${Styles.textButton} btn mx-2` }>
              Educational Courses
            </button>
            </Link>
            <Link to={"/Login"}>
            <button className={`${Styles.textButton} btn mx-2`}>Login</button>

            </Link>
            <Link to={"/register"}>
            <button className={`${Styles.bg} btn  text-white mx-2`}>New Account</button>
            </Link>
            
          </div>
        </div>
        
      </nav>
  
  
  </>
}

export default Navbar