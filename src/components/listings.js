import React, { useContext, useEffect, useState } from 'react';
import { Jumbotron } from 'reactstrap';
import Card from './listingsCard.js';
import SearchBar from './searchBar';
import queryString from 'query-string';
import Isotope from 'isotope-layout';
import imagesloaded from 'imagesloaded';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { MainContext } from '../context/context-provider/mainContext';

let productToShow = [];

const Listings = (props) => {

    const { buy, pg, gym } = useContext(MainContext)
    const searchQuery = queryString.parse(props.location.search);
    const { category } = props.match.params; 

    const [isotope, setIsotope] = useState(null);
    const [sort, setSort] = useState('');
   
    useEffect(()=>{
        imagesloaded(document.querySelector('.product-card'),()=>{
            setIsotope(new Isotope('.product-grid',{
                itemSelector: '.product-card',
                layoutMode: 'fitRows',
                getSortData: {
                    name: '.product-name',
                    price: '.product-price',
                    category: '.product-cat',
                    rating: '.product-rating'
                },
            }))
        }) 
    },[sort]);

    useEffect(()=>{
        if(isotope){
            if(sort === 'Name'){
                isotope.arrange({sortBy:'name'})
            } else if(sort === 'Category'){
                isotope.arrange({sortBy:'category'})
            } else if(sort === 'Price'){
                isotope.arrange({sortBy: 'price'})
            } else if(sort === 'Rating'){
                isotope.arrange({sortBy:'rating'})
            }
        }
    },[isotope, sort])

    const filterProducts = (productArray) => {
        const filteredProducts = productArray.filter((product)=>{
            if(product.price < parseInt(searchQuery.minprice)){
                return false;
            }else if(product.price > parseInt(searchQuery.maxprice)){
                return false;
            }else{
                return true;
            }
        })
        return filteredProducts;
    }
    
    if(category==='pg'){
        productToShow = filterProducts(pg);
    } else if(category==='second hand') {
        productToShow = filterProducts(buy);
    } else if(category === 'gym'){
        productToShow = filterProducts(gym)
    }

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
            <br />
            <div className='container'>
                <h3 style={{textAlign:'center'}}>Search Results</h3>

                <div className='mt-3'>
                    <SearchBar />
                </div>
                
                {productToShow.length > 0 ? 
                <FormControl style={{float:'right',margin:'15px 0px 0px 0px'}} variant='outlined' size='small'>
                    <InputLabel>Sort</InputLabel>
                    <Select style={{borderRadius:'10px'}} native label='Sort' value={sort} onChange={(e)=>setSort(e.target.value)}>
                        <option />
                        <option>Name</option>
                        {category === 'pg' ? <option>Rating</option> : null}
                        <option>Price</option>
                        {category === 'second hand' ? <option>Category</option> : null}
                    </Select>
                </FormControl> : null}
                <div style={{clear:'both'}} /> 
                
                <br /> <br />
                <section class="listing_style_v1 listing_grid_sidebar wow fadeInUp">
                        <div class="row">
                            <div class="col-12">
                                <div class="listing_grid_wrapper product-grid row animate__animated animate__fadeIn animate__faster">
                                    {
                                        productToShow.length > 0 ? productToShow.map((productData)=>(
                                            <Card data={productData} id={productData.id} searchQuery={searchQuery} category={category} />
                                        )) : null 
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



