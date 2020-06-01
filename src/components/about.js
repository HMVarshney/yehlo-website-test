import React from 'react';
import { Jumbotron, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';

const About = () => {
    return ( 
        <>
            <Jumbotron className='listings-container'>
                <div className='listings-jumbotron container mt-5'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-sm-6'>
                                <h3 className='listings-jumbotron-text'>About Us</h3>
                                <hr />
                                <Breadcrumb style={{justifyContent:'center'}}>
                                    <BreadcrumbItem><Link to='/'> Home </Link></BreadcrumbItem>
                                    <BreadcrumbItem> About </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>
            </Jumbotron>

           <section className='container'>
               <h2 className='text-center'> Learn About Us </h2> <hr />
               <div className='row col-12 justify-content-center mt-4 mb-5 ml-1'>
               <iframe id="ytplayer" type="text/html" width="1024" height="600"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
               </div>
           </section>

            {/* <section class="listghor_about about_v3 universal_margin">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="listghor_content_box about_content_box wow fadeInLeft">
							<div class="about_content">
								<h2>WHY YOU SHOULD JOIN<br/>YEHLO?</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five electronic typesetting, remaining essentially unchanged. specimen book. It has survived not only five electronic typesetting, remaining.</p>
							</div>
							<div class="listghor_button">
								<a href="#" class="listghor_btn about_btn">Read more</a>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="listghor_img_box about_img_box wow fadeInRight">
							<div class="listghor_img about_img text-center">
								<img src="assets/images/about_2.jpg" class="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}

        <section class="client-satisfaction lisology_project_v1 universal_margin">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="listghor_title text-center mt-4">
							<h2>WHY SHOULD YOU JOIN <br /> YEHLO?</h2>
							<p>Well, the stats answer it all....</p>
						</div>
					</div>
				</div>
				<div class="counter_box_wrapper p-4">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-6">
							<div class="counter_box wow fadeInUp">
								<div class="listghor_icon">
									<i class="fas fa-smile"></i>
								</div>
								<div class="listghor_info">
									<h4><span class="counter">200</span>+</h4>
									<p>Happy customers</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-6">
							<div class="counter_box wow fadeInUp" >
								<div class="listghor_icon">
									<i class="fas fa-street-view"></i>
								</div>
								<div class="listghor_info">
									<h4><span class="counter">260</span>+</h4>
									<p>New Places everyday</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-6">
							<div class="counter_box wow fadeInUp">
								<div class="listghor_icon">
									<i class="fas fa-address-card"></i>
								</div>
								<div class="listghor_info">
									<h4><span class="counter">120</span>+</h4>
									<p>New Listings everyday</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-6">
							<div class="counter_box wow fadeInUp">
								<div class="listghor_icon">
									<i class="fas fa-leaf"></i>
								</div>
								<div class="listghor_info">
									<h4><span class="counter">1000</span>+</h4>
									<p>Unique places & events</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section class="listghor_team_v1 universal_margin">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="listghor_title text-center">
							<h2>TEAM MEMBERS</h2>
							<p>Follow us, we are good people!</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-3 col-md-6 col-6">
						<div class="team_box wow fadeInUp">
							<div class="team_info">
								<div class="listghor_img team_img">
									<img src="assets/images/team_1.jpg" class="img-fluid" alt="" />
								</div>
								<div class="team_text">
									<h4>JHON DOE</h4>
									<p>CEO & Funder</p>
								</div>
							</div>
							<div class="team_social">
								<ul>
									<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#"><i class="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-6">
						<div class="team_box wow fadeInUp">
							<div class="team_info">
								<div class="listghor_img team_img">
									<img src="assets/images/team_2.jpg" class="img-fluid" alt="" />
								</div>
								<div class="team_text">
									<h4>JHON DOE</h4>
									<p>Project Manager</p>
								</div>
							</div>
							<div class="team_social">
								<ul>
									<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#"><i class="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-6">
						<div class="team_box wow fadeInUp">
							<div class="team_info">
								<div class="listghor_img team_img">
									<img src="assets/images/team_3.jpg" class="img-fluid" alt="" />
								</div>
								<div class="team_text">
									<h4>JHON DOE</h4>
									<p>UI/UX Designer</p>
								</div>
							</div>
							<div class="team_social">
								<ul>
									<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#"><i class="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-6">
						<div class="team_box wow fadeInUp">
							<div class="team_info">
								<div class="listghor_img team_img">
									<img src="assets/images/team_4.jpg" class="img-fluid" alt="" />
								</div>
								<div class="team_text">
									<h4>JHON DOE</h4>
									<p>Designer</p>
								</div>
							</div>
							<div class="team_social">
								<ul>
									<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#"><i class="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}
 
export default About;