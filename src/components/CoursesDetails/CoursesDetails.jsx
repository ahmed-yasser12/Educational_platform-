import React from 'react'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Images/2.jpg";
import Styles from "./CoursesDetails.module.css";

export default function CoursesDetails() {
  return <>
   <div className="container my-5 py-4">
        <div className="row">
          <div className="col-md-4">
            <div className="caption">
              <img src={img2} className="w-100 rounded  my-2" alt="" />
              <button className={`${Styles.bg} btn  text-white  w-100`}>
                {" "}
                Join Now
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="teacherCap p-1">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <div className="my-4 ">
                <span className="border mx-2 p-1 rounded">
                  <i class="fa-solid fs-5 mx-1 fa-graduation-cap"></i> Three
                  high 2025
                </span>
                <Link>
                  {" "}
                  <span className="border mx-2 p-1 rounded">
                    <i class="fa-solid fs-5 mx-1 fa-graduation-cap"></i> Three
                    high 2025
                  </span>
                </Link>
                <span className="border mx-2 p-1 rounded">
                  <i class="fa-solid fs-5 mx-1 fa-graduation-cap"></i> Three
                  high 2025
                </span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, expedita?</p>

            </div>

          </div>
        </div>

        <div className="my-4 p-4 border rounded  "> 
            <div className={`p-4 border rounded   ${Styles.bgLogin}`}>
              <div className="d-flex align-items-center justify-content-between">
                <h5><i class="fa-solid fs-5 mx-1 fa-arrow-right-to-bracket"></i> You must log in first to access the course content  </h5>
                <button className="btn btn-dark "><i className="fa-solid fs-6 mx-1 fa-arrow-right-to-bracket"></i>  log in now </button>
              </div>
            </div>
        </div>

      </div>
  
  
  
  </>
}
