import React from "react";
import Layout from "../src/components/Layout/Layout.jsx";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Register from "../src/components/Register/Register.jsx";
import Login from "../src/components/Login/Login.jsx";
import Home from "../src/components/Home/Home.jsx";
import Courses from "../src/components/Courses/Courses.jsx";
import CoursesDetails from "../src/components/CoursesDetails/CoursesDetails.jsx";
import EducationalCourses from "../src/components/EducationalCourses/EducationalCourses.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="EducationalCourses" element={<EducationalCourses />} />
          <Route path="CoursesDetails" element={<CoursesDetails />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
      </Routes>   
   <Footer/>
   </>
  ;
}

export default App;
