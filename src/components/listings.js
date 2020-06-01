import React, {useState} from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Box } from '@material-ui/core';
import { Jumbotron, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const Listings = (props) => {
    const [filterDropdown, showFilter] = useState(false);

    return(
        <>
            <Jumbotron>
                <div className='listings-jumbotron container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-sm-6'>
                            <h3 className='listings-jumbotron-text'>Listings</h3>
                            <hr />
                            <Breadcrumb style={{justifyContent:'center'}}>
                                <BreadcrumbItem><Link to='/'>Home</Link> </BreadcrumbItem>
                                <BreadcrumbItem>Listings </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className='container'>
            <Button variant='contained' color='dark' onClick={()=>showFilter(!filterDropdown)}> Filter </Button>
            <br/> <br/>
            {filterDropdown &&
                <Box className='filter-container animate__animated animate__fadeIn animate__fast'>
                    <Grid container>
                        <Grid item xs={12} lg>
                        <Box p={2} className='filter-box mt-2 mt-lg-0'>
                        <div class="widget_box">
                            <div class="wb_title">
                                <h5>Categories</h5>
                            </div>
                            <ul class="wb_link">
                                <li><input type='checkbox' /> Hotel <span>(27)</span></li>
                                <li><input type='checkbox' /> Resturaunt <span>(42)</span></li>
                                <li><input type='checkbox' /> Shopping <span>(30)</span></li>
                                <li><input type='checkbox' /> Beauty <span>(36)</span></li>
                                <li><input type='checkbox' /> Nightlife <span>(16)</span></li>
                                <li><input type='checkbox' /> Hotel <span>(20)</span></li>
                            </ul>
                        </div>
                        </Box>
                        </Grid>
                        <Grid item xs={12} lg>
                        <Box p={2} className='filter-box mt-2 mt-lg-0'>
                        <div class="widget_box">
								<div class="wb_title">
									<h5>Sort By Features</h5>
								</div>
								<div class="wb_check_list">
									<div class="single_checkbox">
										<input type="checkbox" class="single_input" id="check1" name="check1" />
									  	<label class="single_input_label" for="check1"><span>Open now</span></label>	
									</div>
									<div class="single_checkbox">
										<input type="checkbox" class="single_input" id="check2" name="check1" />
									  	<label class="single_input_label" for="check2"><span>Near me</span></label>
									</div>
									<div class="single_checkbox">
										<input type="checkbox" class="single_input" id="check3" name="check1" />
									  	<label class="single_input_label" for="check3"><span>Free Wifi</span></label>
									</div>
									<div class="single_checkbox">
										<input type="checkbox" class="single_input" id="check4" name="check1" />
									  	<label class="single_input_label" for="check4"><span>Free Parking</span></label>
									</div>
									<div class="single_checkbox">
										<input type="checkbox" class="single_input" id="check5" name="check1" />
									  	<label class="single_input_label" for="check5"><span>Events</span></label>
									</div>
								</div>
							</div></Box>
                        </Grid>
                        <Grid item xs={12} lg>
                            <Box p={2} className='filter-box mt-2 mt-lg-0'>
                        <div class="widget_box rateing_box">
								<div class="wb_title">
									<h5>Sort By Rating</h5>
								</div>
								<div class="wb_check_list">
									<div class="single_checkbox">
										<input type="radio" class="single_input" id="check6" name="radio1" />
									  	<label class="single_input_label" for="check6"><img src="assets/images/rateing_1.png" alt="" /></label>
									</div>
									<div class="single_checkbox">
										<input type="radio" class="single_input" id="check7" name="radio1" />
									  	<label class="single_input_label" for="check7"><img src="assets/images/rateing_2.png" alt="" /></label>
									</div>
									<div class="single_checkbox">
										<input type="radio" class="single_input" id="check8" name="radio1" />
									  	<label class="single_input_label" for="check8"><img src="assets/images/rateing_3.png" alt="" /></label>
									</div>
									<div class="single_checkbox">
										<input type="radio" class="single_input" id="check9" name="radio1" />
									  	<label class="single_input_label" for="check9"><img src="assets/images/rateing_4.png" alt="" /></label>
									</div>
									<div class="single_checkbox">
										<input type="radio" class="single_input" id="check10" name="radio1" />
									  	<label class="single_input_label" for="check10" ><img src="assets/images/rateing_5.png" alt="" /></label>
									</div>
								</div>
							</div>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            }

            <br /> <br />
            <section class="listing_style_v1 listing_grid_sidebar wow fadeInUp">
                    <div class="row">
                        <div class="col-lg-12 col-12">
                            <div class="listing_grid_wrapper row animate__animated animate__fadeIn animate__faster">
                                <RenderListings />
                                <RenderListings />
                                <RenderListings />
                                <RenderListings />
                            </div>
                        </div>
                </div>
            </section>
            </div>
        </>
    );
}
 
export default Listings;

const RenderListings = () => {
    return(
            <div class="col-lg-4 col-md-4 col-12">
                <div class="listing_item_box wow fadeInUp">
                    <div class="listghor_img">
                        <img src="assets/images/list_7.jpg" alt="" />
                        <a href="listing_details.html"><div class="overlay_img"></div></a>
                        <div class="overlay_content">
                            <ul>
                                <li class="icon"><a href="#"><i class="fas fa-cocktail"></i></a></li>
                                <li><a href="listing_details.html" class="overlay_btn">205 listing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="listing_info">
                        <div class="post_info">
                            <h3><a href="listing_details.html">Venue Hotel The Lily, Singapore</a></h3>
                            <h4 class="price">30.00</h4>
                            <p class="location">Al Mankhool Road, Dubai</p>
                        </div>
                        <div class="post_meta">
                            <ul>
                                <li class="star"><a href="#"><i class="fas fa-star"></i>4.5</a></li>
                                <li class="icon"><a href="#"><i class="far fa-comment-alt"></i></a></li>
                                <li class="icon"><a href="#"><i class="fas fa-phone"></i></a></li>
                                <li class="icon"><a href="#"><i class="far fa-envelope"></i></a></li>
                                <li class="icon"><a href="#"><i class="far fa-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>        
    );
}


const RenderSearchSidebar = () => {
    return(
        <div class="col-lg-4">
            <div class="listghor_sidebar listing_page_sidebar">
                <div class="widget_box search_box">
                    <form>
                        <div class="form_group">
                            <input type="search" class="form_control" placeholder="Search" />
                            <i class="fas fa-search"></i>
                        </div>
                    </form>
                </div>
                <div class="widget_box categories_box">
                    <div class="wb_title">
                        <h5>Categories</h5>
                    </div>
                    <ul class="wb_link">
                        <li><a href="#">Hotel <span>(27)</span></a></li>
                        <li><a href="#">Resturaunt <span>(23)</span></a></li>
                        <li><a href="#">Shopping <span>(42)</span></a></li>
                        <li><a href="#">Beauty & Spa <span>(45)</span></a></li>
                        <li><a href="#">Hospital <span>(19)</span></a></li>
                        <li><a href="#">Nightlife <span>(09)</span></a></li>
                    </ul>
                </div>
                <div class="widget_box features_box">
                    <div class="wb_title">
                        <h5>Sort By Features</h5>
                    </div>
                    <div class="wb_check_list">
                        <div class="single_checkbox">
                            <input type="checkbox" class="single_input" id="check1" name="ceck1" />
                            <label class="single_input_label" for="check1"><span>Open now</span></label>	
                        </div>
                        <div class="single_checkbox">
                            <input type="checkbox" class="single_input" id="check2" name="ceck1" />
                            <label class="single_input_label" for="check2"><span>Near me</span></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="checkbox" class="single_input" id="check3" name="ceck1" />
                            <label class="single_input_label" for="check3"><span>Free Wifi</span></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="checkbox" class="single_input" id="check4" name="ceck1" />
                            <label class="single_input_label" for="check4"><span>Free Parking</span></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="checkbox" class="single_input" id="check5" name="ceck1" />
                            <label class="single_input_label" for="check5"><span>Events</span></label>
                        </div>
                    </div>
                </div>
                <div class="widget_box rateing_box">
                    <div class="wb_title">
                        <h5>Sort By Rating</h5>
                    </div>
                    <div class="wb_check_list">
                        <div class="single_checkbox">
                            <input type="radio" class="single_input" id="check6" name="radi1" />
                            <label class="single_input_label" for="check6"><img src="assets/images/rateing_1.png" alt="" /></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="radio" class="single_input" id="check7" name="radi1" />
                            <label class="single_input_label" for="check7"><img src="assets/images/rateing_2.png" alt="" /></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="radio" class="single_input" id="check8" name="radi1" />
                            <label class="single_input_label" for="check8"><img src="assets/images/rateing_3.png" alt="" /></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="radio" class="single_input" id="check9" name="radi1" />
                            <label class="single_input_label" for="check9"><img src="assets/images/rateing_4.png" alt="" /></label>
                        </div>
                        <div class="single_checkbox">
                            <input type="radio" class="single_input" id="check10" name="rado1" />
                            <label class="single_input_label" for="check10"><img src="assets/images/rateing_5.png" alt="" /></label>
                        </div>
                    </div>
                </div>
                <div class="widget_box news_box">
                    <div class="wb_title">
                        <h5>Recent Listing</h5>
                    </div>
                    <div class="wb_news_list">
                        <div class="single_wb_news">
                            <div class="news_thumb">
                                <img src="assets/images/thumb_1.jpg" alt="" />
                            </div>
                            <div class="news_info">
                                <h2><a href="#">Lorem Ipsum is simpl dummy text of the printing .</a></h2>
                                <p>25 May 2019</p>
                            </div>
                        </div>
                        <div class="single_wb_news">
                            <div class="news_thumb">
                                <img src="assets/images/thumb_2.jpg" alt="" />
                            </div>
                            <div class="news_info">
                                <h2><a href="#">Lorem Ipsum is simpl dummy text of the printing .</a></h2>
                                <p>25 May 2019</p>
                            </div>
                        </div>
                        <div class="single_wb_news">
                            <div class="news_thumb">
                                <img src="assets/images/thumb_3.jpg" alt="" />
                            </div>
                            <div class="news_info">
                                <h2><a href="#">Lorem Ipsum is simpl dummy text of the printing .</a></h2>
                                <p>25 May 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



 // return ( 
    //     <div className='container'>
    //     <Grid container spacing={2}>
    //         <Grid item md={3}>
    //             <Card>
    //                 <CardMedia component='img' title='PG' image={img1} />
    //                 <CardContent>
    //                     <Typography varaint='h5'>
    //                         The Green Apartements
    //                     </Typography>
    //                     <Typography variant='body2'>
    //                         <span className='fa fa-lg fa-dollar-sign'> 30.00 </span>
    //                     </Typography>
    //                 </CardContent>
    //                 <CardActions>
    //                     <Button size='small' color='primary'>
    //                         Share
    //                     </Button>
    //                 </CardActions>
    //             </Card>
    //         </Grid>
    //         <Grid item md={3}>
    //             <Card>
    //                 <CardMedia component='img' title='PG' image={img1} />
    //                 <CardContent>
    //                     <Typography varaint='h5'>
    //                         The Green Apartements
    //                     </Typography>
    //                     <Typography variant='body2'>
    //                         <span className='fa fa-lg fa-dollar-sign'> 30.00 </span>
    //                     </Typography>
    //                 </CardContent>
    //                 <CardActions>
    //                     <Button size='small' color='primary'>
    //                         Share
    //                     </Button>
    //                 </CardActions>
    //             </Card>
    //         </Grid>
    //     </Grid>
    //     </div>
    //  );