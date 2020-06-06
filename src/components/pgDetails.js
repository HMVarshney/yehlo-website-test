import React from 'react';
// import Carousel, { Dots } from '@brainhubeu/react-carousel';
import {Dots} from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Paper } from '@material-ui/core';


const PGDetails = () => {
    return ( 
        <div className='container contentIn'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-10'>
                    <section class="listghor_list_details listghor_list_details_1 wow fadeInUp">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="main_listing_details">
                                        <div class="listing_details_box gallery_box">
                                            <div class="gallery_big">
                                                <div class="single_img">
                                                    <img src="assets/images/gallery_1.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/gallery_2.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/gallery_3.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/gallery_4.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/gallery_5.jpg" class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div class="gallery_small">
                                                <div class="single_img">
                                                    <img src="assets/images/g_1.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/g_2.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/g_3.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/g_4.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="assets/images/g_5.jpg" alt="" />
                                                </div>
                                            </div>
                            </div></div></div></div></div>
                    </section>
                </div>
                  
            </div>

            <div className='row justify-content-center mt-md-4 mt-5'>
                <div className='col-12 col-md-8'>
                    <div class="listing_details_box discription_box">
                        <h4 class="box_title">Description</h4>
                        <div class="top_information">
                            <h3>Metropol Apartment near Elagin</h3>
                            <h4>$50</h4>
                            <span><i class="fas fa-globe"></i>listghor.com</span>
                            <span><i class="fas fa-phone-alt"></i>+4328923208</span>
                            <span><i class="far fa-envelope"></i>demoerr@gmail.com</span>
                        </div>
                        <p>Gregor then turned to look out the window at the dull weather. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed kepping not sure over the horizon.</p>
                        <h5 class="amenities">AMENITIES</h5>
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <div class="featured_list">
                                    <ul>
                                        <li>Elevator in building</li>
                                        <li>Friendly Workspace</li>
                                        <li>Instant Book</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="featured_list">
                                    <ul>
                                        <li>Wireless Internet</li>
                                        <li>TV</li>
                                        <li>Refrigerator</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="featured_list">
                                    <ul>
                                        <li>Events</li>
                                        <li>Free Parking</li>
                                        <li>Security</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 mt-md-0 mt-3'>
                    <div class="rateing_box">
                        <Paper elevation={4} className='p-3'>
                        <h4 class="box_title">Ratings</h4>
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <div class="single_bar">
                                    <h6>Quality <span>80%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar slideInLeft wow" style={{width: "80%"}}>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_bar">
                                    <h6>Space<span>67%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar slideInLeft wow" style={{width: "67%"}}></div>
                                    </div>
                                </div>
                                <div class="single_bar">
                                    <h6>price<span>49%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar slideInLeft wow" style={{width: "49%"}}></div>
                                    </div>
                                </div>
                                <div class="single_bar">
                                    <h6>service<span>84%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar slideInLeft wow" style={{width: "84%"}}></div>
                                    </div>
                                </div>
                                <div class="single_bar">
                                    <h6>location <span>37%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar slideInLeft wow" style={{width: "37%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="riview_bg_box">
                                    <div class="listghor_overlay"></div>
                                    <div class="rateing_content">
                                        <h3>4.5</h3>(<a href="#customer_reviews">135 Reviews</a>)
                                        <h5>Avarage Rating</h5>
                                        <img src="assets/images/rateing_6.png" class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Paper>
                    </div>
                </div>  
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-md-8 col-12'>
                    <div class="listing_details_box map_box">
                        <div class="contact_info">
                            <h4 class="box_title">Location</h4>
                            <h5>Hotel Fairmont San Francisco</h5>
                            <p>950 Mason St, San Francisco, CA 94108, USA</p>
                        </div>
                        <iframe src="https://maps.google.com/maps?q=hotel%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                </div>
                <div className='col-md-4 col-12 mt-md-0 mt-3'>
                    <Paper elevation={4} className='p-1'>
                        <div class="wb_title text-center mb-1">
                            <h5>Contact Owner</h5>
                        </div>
                        <div class="admin_info text-center">
                            <img src="assets/images/admin_2.jpg" class="img-fluid" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, pariatur.</p>
                            <div className='row justify-content-center mt-2 social_link'>
                                <a href='#top'><span className='social_icons fa fa-lg fa-mail-bulk m-2'></span></a>
                                <a href='#top'><span className='social_icons fa fa-lg fa-phone m-2'></span></a>
                                <a href='#top'><span className='social_icons fab fa-lg fa-facebook-messenger m-2'></span></a>
                            </div>
                        </div>
                    </Paper>
                    <div id='customer_reviews' className='customer_reviews mt-2'>
                        <Paper elevation={4} className='p-1'>
                            <div class="listing_details_box comment_area rateing_box">
                                <h4 class="box_title">Reviews</h4>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="assets/images/comment_1.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5><a href="#">JHON DOE</a></h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                        <a href="#" class="reply">reply</a>
                                        <a href="#" class="like"><i class="fas fa-thumbs-up"></i>Like</a>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="assets/images/comment_2.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5><a href="#">JHON DOE</a></h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                        <a href="#" class="reply">reply</a>
                                        <a href="#" class="like"><i class="fas fa-thumbs-up"></i>Like</a>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="assets/images/comment_3.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5><a href="#">JHON DOE</a></h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                        <a href="#" class="reply">reply</a>
                                        <a href="#" class="like"><i class="fas fa-thumbs-up"></i>Like</a>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="assets/images/comment_4.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5><a href="#">JHON DOE</a></h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                        <a href="#" class="reply">reply</a>
                                        <a href="#" class="like"><i class="fas fa-thumbs-up"></i>Like</a>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PGDetails;
