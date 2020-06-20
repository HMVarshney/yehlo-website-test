import React, { useEffect, useContext, useState } from 'react';
import { Box, Grid, Paper, Avatar } from '@material-ui/core';
import { BuyProducts } from '../context/context-provider/buyContextProvider';
import Preloader from './preloader';
import axios from 'axios';
import SlickSlider from './slider';
import BottomNav from './bottomNav';

import PersonIcon from '@material-ui/icons/Person';


const PGDetails = (props) => {
    const [productData, setProductData] = useState(null);
    const {buyProducts} = useContext(BuyProducts);

    useEffect(()=>{
        // axios.get(`https://us-central1-yehlo-74093.cloudfunctions.net/api/buy/${props.match.params.product_id}`)
        // .then((response)=>{
        //     setProductData(response.data.data);
        // })
        setProductData(buyProducts.filter((product)=>(product.id === props.match.params.product_id))[0]);
    });
    
    if(productData){
    return ( 
        <>
        <div className='container contentIn'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-10'>
                    <section class="listghor_list_details listghor_list_details_1 wow fadeInUp">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="main_listing_details">
                                        <div class="listing_details_box gallery_box">
                                            {/* <div class="gallery_big">
                                                <div class="single_img">
                                                    <img src='/assets/images/gallery_1.jpg' class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/gallery_2.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/gallery_3.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/gallery_4.jpg" class="img-fluid" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/gallery_5.jpg" class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div class="gallery_small">
                                                <div class="single_img">
                                                    <img src="/assets/images/g_1.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/g_2.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/g_3.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/g_4.jpg" alt="" />
                                                </div>
                                                <div class="single_img">
                                                    <img src="/assets/images/g_5.jpg" alt="" />
                                                </div>
                                            </div> */}

                                            <SlickSlider images={productData.images} />
                            </div></div></div></div></div>
                    </section>
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                <div className={productData.type === 'Second Hand Product' ? 'col-md-10' : 'col-md-7'}>
                    <div class="listing_details_box discription_box">
                        <h4 class="box_title">Description</h4>
                            <div className='row mb-2'>
                                <div className='col-6'>
                                <h3 className='details_title'>{productData.name}</h3>
                                <h4 className='details_price'><span className='fa fa-rupee-sign details_icon pr-1' />{productData.price} /month</h4>
                            </div>
                            <div className='col-6'>
                                <Avatar style={{float:'right'}} src={productData.sellerImage} alt='seller image' />
                                <div style={{clear:'both'}} />
                                <span style={{float:'right'}}><span><PersonIcon style={{color:'	#211a23'}} /></span> { productData.sellerName } </span>
                                <div style={{clear:'both'}} />
                                <span style={{float:'right'}}><span className='fa fa-phone details_icon' /> 9898989898 </span>
                            </div>
                        </div>
                        <p className='details_description_text'>Gregor then turned to look out the window at the dull weather. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed kepping not sure over the horizon.</p>
                        
                        {productData.type === 'Second Hand Product' ? null :
                        <Paper elevation={4} className='p-3'>
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
                        </Paper>}

                    </div>
                </div>

                <div className={productData.type==='Second Hand Product' ? 'd-none' : 'col-md-3 mt-lg-0 mt-3'}>
                    <div class="rateing_box">
                        <Paper elevation={4} className='p-2'>
                        <h4 class="box_title">Ratings</h4>
                        <div class="row align-items-center">
                            <div class="col-12">
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
                            <div class="col-12">
                                <div class="riview_bg_box">
                                    <div class="listghor_overlay"></div>
                                    <div class="rateing_content">
                                        <h3>4.5</h3>(<a href="#customer_reviews">135 Reviews</a>)
                                        <h5>Avarage Rating</h5>
                                        <img src="/assets/images/rateing_6.png" class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Paper>
                    </div>
                </div> 
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-md-10 col-12'>
                    <div class="listing_details_box map_box">
                        <div class="contact_info">
                            <h4 class="box_title">Location</h4>
                            <h5>{productData.address}</h5>
                            <p>{productData.district}</p>
                        </div>
                        <iframe title='address' src={`https://maps.google.com/maps?q=${productData.latitude}, ${productData.longitude}&z=15&output=embed`}></iframe>                        
                    </div>
                </div>
            </div>
                
            {/* <div className='row justify-content-center'>
                <div className='col-md-5 col-12 mt-3'>
                    <Paper elevation={4} className='p-1'>
                        <div class="wb_title text-center mb-1">
                            <h5>Contact Owner</h5>
                        </div>
                        <div class="admin_info text-center">
                            <img width='40%' src={productData.sellerImage} class="img-fluid" alt="" />
                            <p>{productData.sellerName}</p>
                            <div className='row justify-content-center mt-2 social_link'>
                                <a href='#top'><span className='social_icons fa fa-lg fa-mail-bulk m-2'></span></a>
                                <a href='#top'><span className='social_icons fa fa-lg fa-phone m-2'></span></a>
                                <a href='#top'><span className='social_icons fab fa-lg fa-facebook-messenger m-2'></span></a>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div> */}
            {productData.type==='Second Hand Product' ? null :
            <div className='row justify-content-center'>                       
                <div className='col-md-10 col-12 mt-3'>
                    <div id='customer_reviews' className='customer_reviews'>
                        <Paper elevation={2} className='p-1'>
                            <div class="listing_details_box comment_area rateing_box">
                                <h4 class="box_title">Reviews</h4>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="/assets/images/comment_1.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5>JHON DOE</h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="/assets/images/comment_2.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5>JHON DOE</h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="/assets/images/comment_3.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5>JHON DOE</h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                    </div>
                                </div>
                                <div class="single_comment">
                                    <div class="comment_thumb">
                                        <img src="/assets/images/comment_4.jpg" alt="" />
                                    </div>
                                    <div class="comment_info">
                                        <h5>JHON DOE</h5>
                                        <h6>Oct 15, 2018 at 11:00</h6>
                                        <p>My lady mush hanky panky young delinquent lurgy the little rotter in my flat tomfoolery so I said mufty cockup.!</p>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div> }
            
        </div>
        
        <BottomNav />
        </>
    );} else return <Preloader />
}
 
export default PGDetails;
