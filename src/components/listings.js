import React, { useContext, useEffect, useState } from 'react';
import Card from './listingsCard.js';
import SearchBar from './Search/searchBar';
import queryString from 'query-string';
import Isotope from 'isotope-layout';
import imagesloaded from 'imagesloaded';
import { FormControl, MenuItem, TextField, Typography, Chip, Tooltip } from '@material-ui/core';
import SkeletonLoader from './Preloaders/skeletonLoader';

//icons
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';

//context
import { MainContext } from '../context/context-provider/mainContext';

let productToShow = [];
let location = null;

const Listings = (props) => {

    const { buy, pg, gym, partner, premium, sponsered } = useContext(MainContext);
    // const { collegeList } = useContext(CollegeListContext);
    const searchQuery = queryString.parse(props.location.search);
    const { category } = props.match.params; 

    const [isotope, setIsotope] = useState(null);
    const [sort, setSort] = useState('');

    useEffect(()=>{
        imagesloaded(document.querySelector('.product-card'),()=>{
            setIsotope(new Isotope('.product-grid',{
                itemSelector: '.product-card',
                layoutMode: 'fitRows',
                sortAscending: {
                    rating: false,
                    price: false,
                    name: true,
                    category: true,
                },
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
    },[isotope, sort]);

    if(searchQuery.lat!=='null'){
        location = {latitude: searchQuery.lat, longitude: searchQuery.lng}
    }

    if(category==='pg' && pg.length > 0){
        productToShow = filterProducts(pg,searchQuery.minprice, searchQuery.maxprice,location);
    } else if(category==='buy' && buy.length > 0) {
        productToShow = filterProducts(buy,searchQuery.minprice, searchQuery.maxprice, location);
    } else if(category === 'gym' && gym.length > 0){
        productToShow = filterProducts(gym,searchQuery.minprice, searchQuery.maxprice, location);
    } else if(category === 'partner'){
        productToShow = filterProducts(partner,searchQuery.minprice, searchQuery.maxprice, location);
    } else if(category === 'premium'){
        productToShow = filterProducts(premium,searchQuery.minprice, searchQuery.maxprice, location);
    } else if(category === 'sponsered' && sponsered.length > 0){
        productToShow = filterProducts(sponsered,searchQuery.minprice, searchQuery.maxprice, location);
    };

    return(
        <div>
            <br /> <br />
                {/* <div className='row justify-content-center breadcrumb'>
                    <Breadcrumbs separator='>'>
                        <NavLink to='/'><HomeTwoToneIcon /> Home</NavLink>
                        <NavItem><ViewListTwoToneIcon /> Lisitings</NavItem>
                        <NavItem>{`${category.toUpperCase()}`}</NavItem>
                    </Breadcrumbs>
                </div> */}
            <div className='container mt-5'>
                <Typography variant='h4' style={{textAlign:'center'}}> {category.toUpperCase()} Results </Typography>

                <div className='mt-3'>
                    <SearchBar />
                </div>
                
                {productToShow.length > 0 ? 
                <FormControl style={{float:'right',margin:'15px 0px 0px 0px', width:'100px'}} variant='outlined'>
                    <TextField size='small' select label='Sort' value={sort} onChange={(e)=>setSort(e.target.value)} variant='outlined'>
                        <MenuItem>None</MenuItem>
                        <MenuItem value='Name'>Name</MenuItem>
                        {category === 'buy' ? <MenuItem value='Category'>Category</MenuItem> : <MenuItem value='Rating'>Rating</MenuItem>}
                        <MenuItem value='Price'>Price</MenuItem>
                    </TextField>
                </FormControl> : null }
                <div className='mt-3' >
                    <Typography variant='body1'>Showing results for: </Typography>
                    <Chip className='mr-1' size='small' icon={<ClassTwoToneIcon />} label={category.toUpperCase()} /> <br className='d-block d-lg-none' />
                    {searchQuery.place && <><Tooltip title={searchQuery.place}><Chip style={{width:'200px', overflow:'ellipsis'}} className='mr-1' size='small' icon={<SchoolTwoToneIcon />} label={searchQuery.place} /></Tooltip>  <br className='d-block d-lg-none' /> </>}
                    {searchQuery.minprice && <Chip className='mr-1' size='small' icon={<AttachMoneyTwoToneIcon />} label={`${searchQuery.minprice} - ${searchQuery.maxprice}`} /> }
                </div>
                <div style={{clear:'both'}} /> 
                
                <br /> <br />
                { productToShow.length > 0 ? <section class="listing_style_v1 listing_grid_sidebar wow fadeInUp">
                        <div class="row">
                            <div class="col-12">
                                <div className="listing_grid_wrapper product-grid row animate__animated animate__fadeIn animate__faster">
                                    {
                                        productToShow.length > 0 ? productToShow.map((productData)=>(
                                            <Card data={productData} id={productData.id} searchQuery={searchQuery} category={category} />
                                        )) : null 
                                    }
                                </div>
                            </div>
                        </div>
                </section> : <SkeletonLoader number={4} where='listings' /> }
            </div>
        </div>
    ); 
}
 
export default Listings;

const filterProducts = (productArray, minprice, maxprice, location) => {
    let filteredProducts = productArray.filter((product)=>{
        if(product.price < parseInt(minprice)){
            return false;
        }else if(product.price > parseInt(maxprice)){
            return false;
        }else{
            return true;
        }
    });

    if(location!==null){
        filteredProducts = filteredProducts.map((product)=>calcDistance(product,location))}

    let sortedProducts =  filteredProducts.sort(function(a,b){
        return a.distance-b.distance });

    return sortedProducts;
}

const calcDistance = (product, location) => {
    let lat1 = product.latitude, lat2 = location.latitude;
    let lon1 = product.longitude, lon2 = location.longitude;
    if ((lat1 === lat2) && (lon1 === lon2)) {
		return 0;
	}
	else {
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = lat1 * (Math.PI/180); // Convert degrees to radians
        var rlat2 = lat2 * (Math.PI/180); // Convert degrees to radians
        var difflat = rlat2-rlat1; // Radian difference (latitudes)
        var difflon = (lon2-lon1) * (Math.PI/180); // Radian difference (longitudes)
    
        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return {...product, distance: d};
	}
}

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