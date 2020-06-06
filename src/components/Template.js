import React, { Component } from "react";
import Carousel from "../components/Carousel";

export class Template extends Component {
  render() {
    return (
        <div>
          {/* Start preloader  */}
          <div className="preloader_area">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
          {/* End preloader  */}
          {/* Start header_bg section */}
          <section className="hero_bg hero_v2 light_bg">
            <svg id="head_shape" width="1013px" height="1013px">
              <path
                fillRule="evenodd"
                fill="rgb(254, 61, 108)"
                d="M1.000,-0.000 C1.000,-0.000 -18.082,170.553 187.000,205.999 C561.196,270.675 193.939,1012.999 1013.000,1012.999 C1013.000,170.999 1013.000,-0.000 1013.000,-0.000 L1.000,-0.000 Z"
              />
            </svg>
            <img src="assets/images/shape_6.png" alt="" className="shape_1" />
            <img src="assets/images/shape_7.png" alt="" className="shape_2" />
            <img src="assets/images/shape_8.png" alt="" className="shape_3" />
            <img src="assets/images/shape_9.png" alt="" className="shape_4" />
            <img src="assets/images/shape_10.png" alt="" className="shape_5" />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                  <div
                    className="welcome_text wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <h1>
                      Find Out Great Place In
                      <br />
                      Your City
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting out industry. Lorem Ipsum has been
                    </p>
                    <a href="#" className="listghor_btn welcome_btn">
                      Read more
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="welcome_img listghor_img wow fadeInRight"
                    data-wow-delay=".3s"
                  >
                    <img src="assets/images/illustration_1.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero_search hero_search_v2 text-center">
                    <form>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control fi_width_1"
                              placeholder="What are you looking?"
                              required
                            />
                            <i className="fas fa-city" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form_group">
                            <select className="search_select">
                              <option data-display="location">
                                Bnagladesh
                              </option>
                              <option value={1}>India</option>
                              <option value={2}>Chaina</option>
                              <option value={3}>America</option>
                              <option value={4}>Russia</option>
                            </select>
                            <i className="fas fa-location-arrow" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form_group">
                            <select className="search_select">
                              <option data-display="Categories">
                                Real Estate
                              </option>
                              <option value={1}>travel</option>
                              <option value={2}>Beauty &amp; Spa</option>
                              <option value={3}>Night Club</option>
                              <option value={4}>Shopping</option>
                              <option value={4}>Resturaunt</option>
                            </select>
                            <i className="fas fa-list" />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="filter_button">
                            <button className="search_btn">Search</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Start header_bg section */}
          {/* Start listghor_about section */}
          <section className="listghor_about about_v1 about_v2 section_padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div
                    className="listghor_img_box about_img_box wow fadeInLeft"
                    data-wow-delay=".1s"
                  >
                    <div className="listghor_img about_img">
                      <img src="assets/images/about_3.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="listghor_content_box about_content_box wow fadeInRight"
                    data-wow-delay=".15s"
                  >
                    <div className="about_content">
                      <span>About Us</span>
                      <h2>
                        WE HELP TO GROW
                        <br />
                        BUSINESS
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                        textLorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                    <div className="listghor_button">
                      <a href="#" className="listghor_btn about_btn">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End listghor_about section */}
          {/* Start listghor_top_category section */}
          <section className="category_v2 light_bg section_padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>OUR CATEGORIES</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="far fa-building"></i>
                      </div>
                      <div class="category_info">
                          <h5>REAL ESTATE</h5>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="fas fa-luggage-cart"></i>
                      </div>
                      <div class="category_info">
                          <h5>TRAVEL</h5>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="fas fa-spa"></i>
                      </div>
                      <div class="category_info">
                          <h5>BEAUTY & SPA</h5>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="fas fa-glass-cheers"></i>
                      </div>
                      <div class="category_info">
                          <h5>NIGHT CLUB</h5>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="fas fa-shopping-bag"></i>
                      </div>
                      <div class="category_info">
                          <h5>SHOPPING</h5>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="category_box">
                  <a href="listing_grid.html">
                      <div class="category_icon">
                          <i class="fas fa-cocktail"></i>
                      </div>
                      <div class="category_info">
                          <h5>FOOD & DRINKS</h5>
                      </div>
                  </a>
              </div>
          </div>
      </div>
            </div>
          </section>
          {/* End listghor_top_category section */}
          {/* Start popular_catagory section */}
          <section
            className="popular_catagory_v1 section_padding"
            id="popular_catagory"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>Explore Dream Places</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="listghor_filter text-center">
                    <button className="filter_btn btn_active" data-filter="*">
                      All
                    </button>
                    <button className="filter_btn" data-filter=".cat_1">
                      Trending
                    </button>
                    <button className="filter_btn" data-filter=".cat_2">
                      Popular
                    </button>
                    <button className="filter_btn" data-filter=".cat_3">
                      Most Visited
                    </button>
                  </div>
                </div>
              </div>
              <div className="category_grid row">
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_1">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_1.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_2">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_2.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_3">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_3.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_2">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_4.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_1">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_5.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 grid_item cat_3">
                  <div className="popular_category_box wow fadeInUp">
                    <a href="#" className="listghor_img">
                      <img src="assets/images/place_6.jpg" alt="" />
                      <div className="overlay_img" />
                      <div className="overlay_content">
                        <h4>FOOD &amp; DRINKS</h4>
                        <p>128 Listing</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End popular_catagory section */}
          {/* Start how_it_work section */}
          <section className="working_process_v2 light_bg section_padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>SEE HOW IT WORKS?</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="work_box iconshape_5">
                    <div className="listghor_icon">
                      <svg id="icon_shape_1" width="190px" height="155px">
                        {" "}
                        <path
                          fillRule="evenodd"
                          fill="rgb(254, 61, 108)"
                          d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                        />
                      </svg>
                      <svg id="icon_shape_2" width="181px" height="178px">
                        <path
                          fillRule="evenodd"
                          opacity="0.102"
                          fill="rgb(254, 61, 108)"
                          d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                        />
                      </svg>
                      <i className="fas fa-users" />
                    </div>
                    <div className="listghor_info">
                      <h4>Choose what to do</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing ad and
                        type setting industry. Lorem Ipsum has been the
                        industry's standa dummy{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="work_box iconshape_5">
                    <div className="listghor_icon">
                      <svg id="icon_shape_3" width="190px" height="155px">
                        {" "}
                        <path
                          fillRule="evenodd"
                          fill="rgb(254, 61, 108)"
                          d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                        />
                      </svg>
                      <svg id="icon_shape_4" width="181px" height="178px">
                        <path
                          fillRule="evenodd"
                          opacity="0.102"
                          fill="rgb(254, 61, 108)"
                          d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                        />
                      </svg>
                      <i className="fas fa-map-marked-alt" />
                    </div>
                    <div className="listghor_info">
                      <h4>Find what you want</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing ad and
                        type setting industry. Lorem Ipsum has been the
                        industry's standa dummy{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="work_box">
                    <div className="listghor_icon">
                      <svg id="icon_shape_5" width="190px" height="155px">
                        {" "}
                        <path
                          fillRule="evenodd"
                          fill="rgb(254, 61, 108)"
                          d="M1.408,30.506 C2.937,19.614 14.059,-2.593 38.972,0.312 C63.886,3.217 81.159,26.025 117.240,22.345 C153.322,18.666 174.283,29.027 184.698,49.575 C195.113,70.122 187.182,93.311 173.757,106.790 C160.332,120.270 140.621,119.716 125.667,121.237 C110.712,122.756 101.703,129.768 87.347,142.693 C72.990,155.617 57.211,158.484 45.141,148.670 C33.071,138.856 36.060,105.062 33.155,95.346 C30.250,85.630 15.400,75.334 9.290,64.627 C3.180,53.919 -0.712,45.614 1.408,30.506 Z"
                        />
                      </svg>
                      <svg id="icon_shape_6" width="181px" height="178px">
                        <path
                          fillRule="evenodd"
                          opacity="0.102"
                          fill="rgb(254, 61, 108)"
                          d="M40.000,130.999 C70.202,126.504 77.354,139.303 106.000,161.000 C134.645,182.696 166.883,182.421 179.000,160.000 C184.397,150.012 174.531,136.702 168.000,108.999 C161.469,81.297 177.483,52.529 169.000,26.999 C163.521,10.511 125.435,-10.014 94.000,5.999 C52.582,27.098 75.895,41.827 19.000,77.999 C-16.971,100.869 5.305,136.163 40.000,130.999 Z"
                        />
                      </svg>
                      <i className="fas fa-compass" />
                    </div>
                    <div className="listghor_info">
                      <h4>Explore amazing place</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing ad and
                        type setting industry. Lorem Ipsum has been the
                        industry's standa dummy{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End how_it_work section */}
          {/* Start explore_city section */}
          <section className="explore_place listing_style_v2 section_padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>EXPLORE YOUR CITY</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="place_slider">
                <div className="listing_item_box">
                  <div className="listghor_img">
                    <img src="assets/images/place_13.jpg" alt="" />
                    <a href="listing_details.html" className="overlay_img" />
                    <div className="overlay_content">
                      <ul>
                        <li className="icon">
                          <a href="#">
                            <i className="far fa-building" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="overlay_btn">
                            173 Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_info">
                    <div className="post_info">
                      <h3>
                        <a href="listing_details.html">Caravela Beach Resort</a>
                      </h3>
                      <h4 className="price">10.00</h4>
                      <p className="location">Al Mankhool Road, Dubai</p>
                      <p className="phone">
                        <a href="tel:+123456789">+123 456 789</a>0
                      </p>
                    </div>
                    <div className="post_meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-home" />
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="open_btn">
                            open now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing_item_box">
                  <div className="listghor_img">
                    <img src="assets/images/place_14.jpg" alt="" />
                    <a href="listing_details.html" className="overlay_img" />
                    <div className="overlay_content">
                      <ul>
                        <li className="icon">
                          <a href="#">
                            <i className="fas fa-luggage-cart" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="overlay_btn">
                            173 Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_info">
                    <div className="post_info">
                      <h3>
                        <a href="listing_details.html">
                          Quality Inn Ocean Palms
                        </a>
                      </h3>
                      <h4 className="price">20.00</h4>
                      <p className="location">Al Mankhool Road, Dubai</p>
                      <p className="phone">
                        <a href="tel:+123456789">+123 456 789</a>
                      </p>
                    </div>
                    <div className="post_meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-home" />
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="close_btn">
                            Close now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing_item_box">
                  <div className="listghor_img">
                    <img src="assets/images/place_15.jpg" alt="" />
                    <a href="listing_details.html" className="overlay_img" />
                    <div className="overlay_content">
                      <ul>
                        <li className="icon">
                          <a href="#">
                            <i className="fas fa-spa" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="overlay_btn">
                            173 Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_info">
                    <div className="post_info">
                      <h3>
                        <a href="listing_details.html">
                          Royal Orchid Beach Resort
                        </a>
                      </h3>
                      <h4 className="price">30.00</h4>
                      <p className="location">Al Mankhool Road, Dubai</p>
                      <p className="phone">
                        <a href="tel:+123456789">+123 456 789</a>
                      </p>
                    </div>
                    <div className="post_meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-home" />
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="open_btn">
                            open now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing_item_box">
                  <div className="listghor_img">
                    <img src="assets/images/place_14.jpg" alt="" />
                    <a href="listing_details.html" className="overlay_img" />
                    <div className="overlay_content">
                      <ul>
                        <li className="icon">
                          <a href="#">
                            <i className="fas fa-glass-cheers" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="overlay_btn">
                            173 Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_info">
                    <div className="post_info">
                      <h3>
                        <a href="listing_details.html">
                          WelcomHeritage Panjim Pousada
                        </a>
                      </h3>
                      <h4 className="price">40.00</h4>
                      <p className="location">Al Mankhool Road, Dubai</p>
                      <p className="phone">
                        <a href="tel:+123456789">+123 456 789</a>
                      </p>
                    </div>
                    <div className="post_meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-home" />
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="open_btn">
                            open now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing_item_box">
                  <div className="listghor_img">
                    <img src="assets/images/place_13.jpg" alt="" />
                    <a href="listing_details.html" className="overlay_img" />
                    <div className="overlay_content">
                      <ul>
                        <li className="icon">
                          <a href="#">
                            <i className="fas fa-shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="overlay_btn">
                            173 Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing_info">
                    <div className="post_info">
                      <h3>
                        <a href="listing_details.html">Bogmallo Beach Resor</a>
                      </h3>
                      <h4 className="price">50.00</h4>
                      <p className="location">Al Mankhool Road, Dubai</p>
                      <p className="phone">
                        <a href="tel:+123456789">+123 456 789</a>
                      </p>
                    </div>
                    <div className="post_meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-home" />
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="open_btn">
                            open now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              <Carousel />
            </div>
          </section>
          {/* End explore_city section */}
          {/* Srart listghor_team section */}
          <section className="listghor_team_v2 section_padding light_bg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>our creative team</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team_box wow fadeInUp">
                    <div className="listghor_img team_img">
                      <img
                        src="assets/images/team_9.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="team_social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info">
                      <div className="team_text">
                        <h4>Ronald M. Steil</h4>
                        <p>CEO &amp; Funder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team_box wow fadeInUp">
                    <div className="listghor_img team_img">
                      <img
                        src="assets/images/team_10.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="team_social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info">
                      <div className="team_text">
                        <h4>Mitzi A. Gamble</h4>
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team_box wow fadeInUp">
                    <div className="listghor_img team_img">
                      <img
                        src="assets/images/team_11.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="team_social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info">
                      <div className="team_text">
                        <h4>Thomas Stafford</h4>
                        <p>Graphics Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team_box wow fadeInUp">
                    <div className="listghor_img team_img">
                      <img
                        src="assets/images/team_12.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="team_social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info">
                      <div className="team_text">
                        <h4>Araceli J. Garcia</h4>
                        <p>Digital Marketer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End listghor_team section */}
          {/* Start listghor_blog section */}
          <section className="listghor_blog_v2 section_padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>latest News</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog_box wow fadeInUp">
                    <div className="listghor_img">
                      <a href="blog_details.html">
                        <img
                          src="assets/images/blog_19.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog_info">
                      <div className="post_text">
                        <h2>
                          <a href="blog_details.html">
                            Jirono Expands the Leadership Team David Lin,
                            Controller in cheap gesut the way.
                          </a>
                        </h2>
                        <p>
                          Mauris tellus sem, ultrices varius nisl at, convallis
                          iaculis mauris. Sed eget sem vitae purus tempus
                          dignissim.Mauris tellus sem, ultrices varius nisl at,
                          convallis iaculis mauris.{" "}
                        </p>
                        <a href="blog_details.html" className="listghor_link">
                          Read more
                        </a>
                      </div>
                      <div className="post_meta">
                        <a href="#" className="date">
                          <i className="far fa-calendar-alt" />
                          18 Apr,2019
                        </a>
                        <a href="#" className="comment">
                          <i className="far fa-comments" />
                          22 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog_box wow fadeInUp">
                    <div className="listghor_img">
                      <a href="blog_details.html">
                        <img
                          src="assets/images/blog_20.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog_info">
                      <div className="post_text">
                        <h2>
                          <a href="blog_details.html">
                            Jirono Expands the Leadership Team David Lin,
                            Controller in cheap gesut the way.
                          </a>
                        </h2>
                        <p>
                          Mauris tellus sem, ultrices varius nisl at, convallis
                          iaculis mauris. Sed eget sem vitae purus tempus
                          dignissim.Mauris tellus sem, ultrices varius nisl at,
                          convallis iaculis mauris.{" "}
                        </p>
                        <a href="blog_details.html" className="listghor_link">
                          Read more
                        </a>
                      </div>
                      <div className="post_meta">
                        <a href="#" className="date">
                          <i className="far fa-calendar-alt" />
                          18 Apr,2019
                        </a>
                        <a href="#" className="comment">
                          <i className="far fa-comments" />
                          22 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog_box wow fadeInUp">
                    <div className="listghor_img">
                      <a href="blog_details.html">
                        <img
                          src="assets/images/blog_21.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog_info">
                      <div className="post_text">
                        <h2>
                          <a href="blog_details.html">
                            Jirono Expands the Leadership Team David Lin,
                            Controller in cheap gesut the way.
                          </a>
                        </h2>
                        <p>
                          Mauris tellus sem, ultrices varius nisl at, convallis
                          iaculis mauris. Sed eget sem vitae purus tempus
                          dignissim.Mauris tellus sem, ultrices varius nisl at,
                          convallis iaculis mauris.{" "}
                        </p>
                        <a href="blog_details.html" className="listghor_link">
                          Read more
                        </a>
                      </div>
                      <div className="post_meta">
                        <a href="#" className="date">
                          <i className="far fa-calendar-alt" />
                          18 Apr,2019
                        </a>
                        <a href="#" className="comment">
                          <i className="far fa-comments" />
                          22 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog_box blog_box_5 wow fadeInUp">
                    <div className="listghor_img">
                      <a href="blog_details.html">
                        <img
                          src="assets/images/blog_22.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog_info">
                      <div className="post_text">
                        <h2>
                          <a href="blog_details.html">
                            Jirono Expands the Leadership Team David Lin,
                            Controller in cheap gesut the way.
                          </a>
                        </h2>
                        <p>
                          Mauris tellus sem, ultrices varius nisl at, convallis
                          iaculis mauris. Sed eget sem vitae purus tempus
                          dignissim.Mauris tellus sem, ultrices varius nisl at,
                          convallis iaculis mauris.{" "}
                        </p>
                        <a href="blog_details.html" className="listghor_link">
                          Read more
                        </a>
                      </div>
                      <div className="post_meta">
                        <a href="#" className="date">
                          <i className="far fa-calendar-alt" />
                          18 Apr,2019
                        </a>
                        <a href="#" className="comment">
                          <i className="far fa-comments" />
                          22 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End listghor-blog section */}
          {/* Start listghor_client section */}
          <section className="listghor_testimonial_v2 section_padding light_bg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="listghor_title text-center">
                    <h2>WHAT OUR CLIENT SAY</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="client_slider_2">
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_2.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_3.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_4.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_2.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_2.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_2.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                    <div className="client_review_box client_review_box_2">
                      <div className="client_admin">
                        <div className="avatar_thumb">
                          <img src="assets/images/admin_2.jpg" alt="" />
                        </div>
                        <div className="avatar_text">
                          <h4>JOHN DOE</h4>
                          <h6>Co Founder &amp; CEO</h6>
                          <ul className="rateing_star">
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint molestiae distinctio culpa qui reiciendis
                          eveniet enim, nemo velit repudiandae unde!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End listghor_client section */}
          {/* Start listghor_contact section */}
          <section className="listing_contact_v1 section_padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="listghor_img_box contact_img_box">
                    <div className="contact_img listghor_img">
                      <img
                        src="assets/images/contact_1.png"
                        className="contact_img_1 img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="listghor_content_box contact_content_box">
                    <div className="contact_title">
                      <h2>GET IN TOUCH</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                      </p>
                    </div>
                    <div className="contact_form">
                      <form>
                        <div className="form_gorup">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="form_gorup">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div className="form_gorup">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Your message"
                            required
                            defaultValue={""}
                          />
                        </div>
                        <div className="form_button">
                          <button
                            type="submit"
                            className="listghor_btn form_btn"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End listghor_contact section */}
          {/* Start listghor_foooter */}
          {/* <footer
            className="listghor_foooter foooter_v2 bg_image"
            style={{ backgroundImage: "url(assets/images/footer_bg_1.jpg)" }}
          >
            <div className="listghor_overlay" />
            <div className="container">
              <div className="footer_widget_wrapper">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget_box about_widget wow fadeInUp">
                      <div className="widget_title">
                        <img
                          src="assets/images/logo.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="widget_content">
                        <p>
                          Lorem Ipsum is simply duammy text of the printing
                          aadnd type an setting industry.{" "}
                        </p>
                        <ul className="social_link">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-12">
                    <div className="widget_box widget_link wow fadeInUp">
                      <div className="widget_title">
                        <h4>Useful Links</h4>
                      </div>
                      <ul className="widget_list">
                        <li>
                          <a href="#">Categories</a>
                        </li>
                        <li>
                          <a href="#">Listing</a>
                        </li>
                        <li>
                          <a href="#">Testmonial</a>
                        </li>
                        <li>
                          <a href="#">Appointment</a>
                        </li>
                        <li>
                          <a href="#">Blog Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="widget_box widget_link wow fadeInUp">
                      <div className="widget_title">
                        <h4>About us</h4>
                      </div>
                      <ul className="widget_list">
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Expert Team</a>
                        </li>
                        <li>
                          <a href="#">Review</a>
                        </li>
                        <li>
                          <a href="#">Faq Question</a>
                        </li>
                        <li>
                          <a href="#">Blog Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget_box contact_widget wow fadeInUp">
                      <div className="widget_title">
                        <h4>Contact Us</h4>
                      </div>
                      <div className="contact_list">
                        <div className="list_icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="list_info">
                          <p>
                            {" "}
                            360 Harvest ST,North subtract <br />
                            LondonUnited States of America
                          </p>
                        </div>
                      </div>
                      <div className="contact_list">
                        <div className="list_icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="list_info">
                          <p>
                            <a href="mailto:listghortemplete@gmail.com">
                              listghortemplete@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="contact_list">
                        <div className="list_icon">
                          <i className="fas fa-phone" />
                        </div>
                        <div className="list_info">
                          <p>
                            <a href="tel:3837389227717">3837 3892 27717</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_copyright">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="copyright_text">
                      <p>Copyright ©2019 Designed by listghor</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="copyright_link">
                      <ul>
                        <li>
                          <a href="#">Privace &amp; Policy</a>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                        <li>
                          <a href="#">Terms</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
          {/* End listghor_foooter */}
          {/* scroll_top */}
          
          {/* jquery  */}
          {/*modernizr js*/}
          {/* bootstrap js */}
          {/* popper js */}
          {/* slick slider js */}
          {/* magnific popup js */}
          {/* isotope js */}
          {/* imagesloaded js */}
          {/* couterup js */}
          {/* jquery_ui js */}
          {/* sidebar js */}
          {/* nice select js */}
          {/* wow js */}
          {/* main js */}
        </div>
    );
  }
}

export default Template;
