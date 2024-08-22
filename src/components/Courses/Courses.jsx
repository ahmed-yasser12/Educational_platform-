import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../Assets/Images/1.jpg";
import img2 from "../../Assets/Images/2.jpg";
import img3 from "../../Assets/Images/3.jpg";
import img4 from "../../Assets/Images/4.jpg";
import img5 from "../../Assets/Images/5.jpg";
import img6 from "../../Assets/Images/6.jpg";
import { Link } from "react-router-dom";
import Styles from  "./Courses.module.css"
export default function Courses() {
  const [Statues, setStatues] = useState("choose")


  return (
    <>
      <section>
        <div className="p-5">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
              style={{color : Statues==="new"?'rgba(179, 175, 175, 0.737)':'' }}
              onClick={()=>{setStatues("choose")}}
                className={`${Styles.mylink} nav-link  active`}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                choosed courses
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
              onClick={()=>{setStatues("new")}}
              style={{color : Statues==="choose"?'rgba(179, 175, 175, 0.737)':''}}

                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                New courses
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper text-center "
                slidesPerView={3}
                spaceBetween={25}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide >
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
                </SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
              </Swiper>
            </div>

            <div
              class="tab-pane fade "
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper text-center "
                slidesPerView={3}
                spaceBetween={25}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide >
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
                </SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
                <SwiperSlide><Link to={"/CoursesDetails"}>
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
                </Link></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
