import React, {useContext} from 'react';
import { Jumbotron } from 'reactstrap';
import {BuyProducts} from '../context/context-provider/buyContextProvider';
import Card from './listingsCard.js';
import Preloader from './preloader';
import SearchBar from './searchBar';

const Listings = (props) => {
    // const [filterDropdown, showFilter] = useState(false);
    const {buyProducts} = useContext(BuyProducts);
    return(
        <div>
            <div className='pl-3 pr-3 p-lg-0'>
                <Jumbotron className='listings-container'>
                    <div className='listings-jumbotron container mt-5'>
                        <div className='listings-jumbotron-text'>
                        </div>
                    </div>
                </Jumbotron>
            </div>

            <div className='container'>
            <h3 style={{textAlign:'center'}}>Search Results</h3>

            <div className='mt-3'>
                <SearchBar />
            </div>

            <br /> <br />
            <section class="listing_style_v1 listing_grid_sidebar wow fadeInUp">
                    <div class="row">
                        <div class="col-12">
                            <div class="listing_grid_wrapper row animate__animated animate__fadeIn animate__faster">
                                {/* {buyProducts ? buyProducts.map((productData)=>(
                                    <RenderListings data={productData}/> 
                                )) : <div>Loading....</div>} */}
                                {
                                    buyProducts ? buyProducts.map((productData,i)=>(
                                        <Card data={productData} id={i} />
                                    )) : <Preloader />
                                }
                            </div>
                        </div>
                    </div>
            </section>
            </div>
        </div>
    ); 
}
 
export default Listings;

// const RenderFilter = () => {
//     return(
//         <Box className='filter-container animate__animated animate__fadeIn animate__fast'>
//             <Grid container>
//                 <Grid item xs={12} lg>
//                     <Box p={2} className='filter-box mt-2 mt-lg-0 mr-md-2'>
//                         <div class="widget_box">
//                             <div class="wb_title">
//                                 <h5>Categories</h5>
//                             </div>
//                             <ul class="wb_link">
//                                 <li><input type='checkbox' /> Hotel <span>(27)</span></li>
//                                 <li><input type='checkbox' /> Resturaunt <span>(42)</span></li>
//                                 <li><input type='checkbox' /> Shopping <span>(30)</span></li>
//                                 <li><input type='checkbox' /> Beauty <span>(36)</span></li>
//                                 <li><input type='checkbox' /> Nightlife <span>(16)</span></li>
//                                 <li><input type='checkbox' /> Hotel <span>(20)</span></li>
//                             </ul>
//                         </div>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} lg>
//                     <Box p={2} className='filter-box mt-2 mt-lg-0 mr-md-2'>
//                         <div class="widget_box">
//                             <div class="wb_title">
//                                 <h5>Sort By Features</h5>
//                             </div>
//                             <div class="wb_check_list">
//                                 <div class="single_checkbox">
//                                     <input type="checkbox" class="single_input" id="check1" name="check1" />
//                                     <label class="single_input_label" for="check1"><span>Open now</span></label>	
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="checkbox" class="single_input" id="check2" name="check1" />
//                                     <label class="single_input_label" for="check2"><span>Near me</span></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="checkbox" class="single_input" id="check3" name="check1" />
//                                     <label class="single_input_label" for="check3"><span>Free Wifi</span></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="checkbox" class="single_input" id="check4" name="check1" />
//                                     <label class="single_input_label" for="check4"><span>Free Parking</span></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="checkbox" class="single_input" id="check5" name="check1" />
//                                     <label class="single_input_label" for="check5"><span>Events</span></label>
//                                 </div>
//                             </div>
//                         </div>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} lg>
//                     <Box p={2} className='filter-box mt-2 mt-lg-0 mr-md-2'>
//                         <div style={{paddingBottom: '20px'}} class="widget_box">
//                             <div class="wb_title">
//                                 <h5>Sort By Rating</h5>
//                             </div>
//                             <div class="wb_check_list">
//                                 <div class="single_checkbox">
//                                     <input type="radio" class="single_input" id="check6" name="radio1" />
//                                     <label class="single_input_label" for="check6"><img src="assets/images/rateing_1.png" alt="" /></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="radio" class="single_input" id="check7" name="radio1" />
//                                     <label class="single_input_label" for="check7"><img src="assets/images/rateing_2.png" alt="" /></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="radio" class="single_input" id="check8" name="radio1" />
//                                     <label class="single_input_label" for="check8"><img src="assets/images/rateing_3.png" alt="" /></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="radio" class="single_input" id="check9" name="radio1" />
//                                     <label class="single_input_label" for="check9"><img src="assets/images/rateing_4.png" alt="" /></label>
//                                 </div>
//                                 <div class="single_checkbox">
//                                     <input type="radio" class="single_input" id="check10" name="radio1" />
//                                     <label class="single_input_label" for="check10" ><img src="assets/images/rateing_5.png" alt="" /></label>
//                                 </div>
//                             </div>
//                         </div>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

// const RenderListings = (props) => {
//     return(
//         <div class="col-lg-4 col-md-4 col-12">
//             <div class="listing_item_box wow fadeInUp">
//                 <div class="listghor_img">
//                     <img src='/assets/images/blog_3.jpg' alt="Product Image" />
//                     <div class="overlay_img"></div>
//                         <div class="overlay_content">
//                             <ul>
//                                 <li><a href="listing_details.html" class="overlay_btn">205 listing</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="listing_info">
//                         <div class="post_info">
//                             <h3><a href={`/details`} style={{textDecoration:'none'}}>Product Name</a></h3>
//                             <h4 class="price">Product Price</h4>
//                             <p class="location">Product Location</p>
//                     </div>
//                     <div class="post_meta">
//                         <ul>
//                             <li class="star"><a href="#"><i class="fas fa-star"></i>4.5</a></li>
//                             <li class="icon"><a href="#"><i class="far fa-comment-alt"></i></a></li>
//                             <li class="icon"><a href="#"><i class="fas fa-phone"></i></a></li>
//                             <li class="icon"><a href="#"><i class="far fa-envelope"></i></a></li>
//                             <li class="icon"><i class="fa fa-info-circle"></i></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>        
//     );
// }

