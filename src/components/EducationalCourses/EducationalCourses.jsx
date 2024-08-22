import React from 'react'
import Styles from "./EducationalCourses.module.css"
import { Link } from 'react-router-dom'
import img1 from "../../Assets/Images/1.jpg";
import img2 from "../../Assets/Images/2.jpg";
import img3 from "../../Assets/Images/3.jpg";
import img4 from "../../Assets/Images/4.jpg";
import img5 from "../../Assets/Images/5.jpg";
import img6 from "../../Assets/Images/6.jpg";
import { TextField } from '@mui/material';

export default function EducationalCourses() {
  return <>
    <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="searchInput">
                <TextField
                  id="outlined-basic"
                  label="Search a Course"
                  variant="outlined"
                />
              </div>
              <div className={` my-4 border  w-75 rounded`}>
                <p className="p-2">Classes</p>
                <div className={`${Styles.line}`}></div>
                <div className={`${Styles.classesContent}`}>
                  <p className="p-2 mx-1 ">
                    <i className="fa-solid fs-5 mx-2  fa-graduation-cap"></i>{" "}
                    three high{" "}
                  </p>
                  <p className="p-2 mx-1">
                    <i className="fa-solid fs-5  mx-2 fa-graduation-cap"></i>
                    three high{" "}
                  </p>
                  <p className="p-2 mx-1">
                    <i className="fa-solid fs-5  mx-2 fa-graduation-cap"></i>
                    three high{" "}
                  </p>
                  <p className="p-2 mx-1">
                    <i className="fa-solid fs-5  mx-2 fa-graduation-cap"></i>
                    three high{" "}
                  </p>
                  <p className="p-2 mx-1">
                    <i className="fa-solid fs-5  mx-2 fa-graduation-cap"></i>
                    three high{" "}
                  </p>
                  <p className="p-2 mx-1">
                    <i className="fa-solid fs-5  mx-2 fa-graduation-cap"></i>
                    three high{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8  ">
                <div className="row">
                <div className="col-md-4 my-2  ">
                <Link to={"/CoursesDetails"}>
                <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img1}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 my-2  ">
                <Link to={"/CoursesDetails"}>
                <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img2}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 my-2  ">
                <Link to={"/CoursesDetails"}>
                <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img3}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>

                </Link>
              </div>
              <div className="col-md-4 my-2  ">
                <Link to={"/CoursesDetails"}>
                <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img4}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 my-2  ">
                <Link to={"/CoursesDetails"}>
                
                <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img5}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 my-2  ">
               <Link to={"/CoursesDetails"}>
               <div className="card  bg-transparent">
                  <img
                    className="card-img-top w-100"
                    src={img6}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <p className="card-text">Lorem, ipsum dolor.</p>
                    <h4 className="card-text">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                  </div>
                </div>
               
               </Link>
              </div>
                </div>
              
             
            </div>
          </div>
        </div>
      </section>
  </>
}
