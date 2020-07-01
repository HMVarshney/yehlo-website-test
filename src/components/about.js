import React, { Component } from "react";
import { Container } from "reactstrap";

import Footer from "./Footer";
import Carousel from "./Carousel/Carousel";

import "../css/about.css";
import styles from "../css/about.module.css";
import TeamCard from "./Carousel/TeamCard";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className={styles.billBoard}>
          <Container
            style={{
              position: "relative",
              height: "inherit",
              overflow: "hidden",
            }}
          >
            <div className={styles.centerBlock}>
              <div className={styles.centerBrand}>YEH!O</div>
            </div>
          </Container>
        </div>
        <div class="listghor_about about_v1 section_padding top_section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="listghor_content_box about_content_box wow fadeInLeft">
                  <div class="about_content">
                    <h2>What is Yeh!o?</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy textLorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="listghor_img_box about_img_box wow fadeInRight">
                  <div class="listghor_img about_img">
                    <img
                      src="assets/images/about_1.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="overlay_img"></div>
                    <div class="overlay_content">
                      <a
                        href="https://www.youtube.com/watch?v=3AtDnEC4zak"
                        class="play_btn"
                      >
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="working_process_v2 section_padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-8 col-sm-12">
                <div class="listghor_title text-center">
                  <h2>How does it work?</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="work_box iconshape_5">
                  <div class="listghor_icon">
                    <svg id="icon_shape_1" width="190px" height="155px">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        fill="rgb(254, 61, 108)"
                        d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                      />
                    </svg>
                    <svg id="icon_shape_2" width="181px" height="178px">
                      <path
                        fill-rule="evenodd"
                        opacity="0.102"
                        fill="rgb(254, 61, 108)"
                        d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                      />
                    </svg>
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="listghor_info">
                    <h4>Choose what to do</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing ad and
                      type setting industry. Lorem Ipsum has been the industry's
                      standa dummy{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="work_box iconshape_5">
                  <div class="listghor_icon">
                    <svg id="icon_shape_3" width="190px" height="155px">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        fill="rgb(254, 61, 108)"
                        d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                      />
                    </svg>
                    <svg id="icon_shape_4" width="181px" height="178px">
                      <path
                        fill-rule="evenodd"
                        opacity="0.102"
                        fill="rgb(254, 61, 108)"
                        d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                      />
                    </svg>
                    <i class="fas fa-map-marked-alt"></i>
                  </div>
                  <div class="listghor_info">
                    <h4>Find what you want</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing ad and
                      type setting industry. Lorem Ipsum has been the industry's
                      standa dummy{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="work_box">
                  <div class="listghor_icon">
                    <svg id="icon_shape_5" width="190px" height="155px">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        fill="rgb(254, 61, 108)"
                        d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                      />
                    </svg>
                    <svg id="icon_shape_6" width="181px" height="178px">
                      <path
                        fill-rule="evenodd"
                        opacity="0.102"
                        fill="rgb(254, 61, 108)"
                        d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                      />
                    </svg>
                    <i class="fas fa-compass"></i>
                  </div>
                  <div class="listghor_info">
                    <h4>Explore amazing place</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing ad and
                      type setting industry. Lorem Ipsum has been the industry's
                      standa dummy{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="listghor_team_v2 section_padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-8 col-sm-12">
                <div class="listghor_title text-center">
                  <h2>Our Team</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 className="mb-3">Co-Founders</h4>
              <div className={styles.alignment}>
                <div class="col-xs-6 col-md-4 col-lg-3">
                  <TeamCard />
                </div>
                <div class="col-xs-6 col-md-4 col-lg-3">
                  <TeamCard />
                </div>
              </div>
              <h4 className="mb-3 team_tech">Tech Team</h4>
              <Carousel team />
              <h4 className="mb-3 team_market">Marketing Team</h4>
              <Carousel team />
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
