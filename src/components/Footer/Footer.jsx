import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../../Assets/Images/logo-white.svg";

export default function Footer() {
  return <>
    <footer className='bg-dark text-white my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="item p-4">
              <img src={Logo} className='w-50 my-2' alt="" />
              <p className='my-2 text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nihil dolores, laudantium vel, ipsa repellendus asperiores nam obcaecati sed, impedit minima possimus placeat reprehenderit autem..</p>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className="item text-center p-4 ">
              <p>Links</p>
                <div className='d-flex flex-column'>
                <Link>
                  <button className={`${styles.buttonbg} btn btn-transparent my-2 text-secondary`}>Home Page</button>
                </Link>
                <Link>
                  <button className={`${styles.buttonbg} btn btn-transparent my-2 text-secondary`}>New Account</button>
                </Link>
                <Link>
                  <button className={`${styles.buttonbg} btn btn-transparent my-2 text-secondary`}>Login</button>
                </Link>
                </div>
              <p>Helping </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item  text-center my-4 py-4">
              <p className='mb-3'>Contact us </p>
              <button className={`btn  rounded border border-danger text-danger`}>Helping</button>
              <div className='my-3 icons py-2'>
                <i className='fab mx-1 p-1  fa-whatsapp fs-4'></i>
                <i className='fab mx-1 p-1 fa-linkedin fs-4'></i>
                <i className='fab mx-1 p-1 fa-facebook fs-4'></i>
                <i className='fab mx-1 p-1 fa-youtube fs-4'></i>
              </div>
              <div className={`${styles.line} mx-auto`}></div>
            </div>
          </div>
        </div>
      </div>



    </footer>
  
  
  </>
}
