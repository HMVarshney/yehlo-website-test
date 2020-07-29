import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../Search/searchBar';
import queryString from 'query-string';
import { FormControl, MenuItem, TextField, Typography, Chip, Tooltip } from '@material-ui/core';

//icons
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';

//context
import { MainContext } from '../../context/context-provider/mainContext';
import RenderListings from './RenderListings';
import SkeletonLoader from '../Preloaders/skeletonLoader';
import SortHandler from './Sorting';


const Listings = (props) => {

    const { buy, pg, gym, partner, premium, sponsered } = useContext(MainContext);
    
    const searchQuery = queryString.parse(props.location.search);
    const { category } = props.match.params;

    const [sort, setSort] = useState('');
    const [productToShow, setProducts] = useState([]);
    const [location, setLocation] = useState('null');

    const sortReverse = () => {
        const newProducts = [...productToShow];
        newProducts.reverse();
        setSort(newProducts);
    }

    useEffect(()=>{
        if(sort !== ''){
            const property = sort;
            const newProducts = [...productToShow];
            newProducts.sort((a,b)=>{
                if(a[property]>b[property])
                    return 1
                else if(a[property]<b[property])
                    return -1
                else return 0
            });
            setProducts(newProducts)
        }
    },[sort])

    useEffect(()=>{
        setSort('');
        setLocation({latitude: searchQuery.lat, longitude: searchQuery.lng});
    },[searchQuery.lat, searchQuery.lng])

    useEffect(()=>{
        setSort('');
        if(category==='pg' && pg.length > 0){
            setProducts(filterProducts(pg,searchQuery.minprice, searchQuery.maxprice,location));
        } else if(category==='buy' && buy.length > 0) {
            setProducts(filterProducts(buy,searchQuery.minprice, searchQuery.maxprice, location))
        } else if(category === 'gym' && gym.length > 0){
            setProducts(filterProducts(gym,searchQuery.minprice, searchQuery.maxprice, location));
        } else if(category === 'partner'){
            setProducts(filterProducts(partner,searchQuery.minprice, searchQuery.maxprice, location))
        } else if(category === 'premium'){
            setProducts(filterProducts(premium,searchQuery.minprice, searchQuery.maxprice, location))
        } else if(category === 'sponsered' && sponsered.length > 0){
            setProducts(filterProducts(sponsered,searchQuery.minprice, searchQuery.maxprice, location))
        };
    },[buy, gym, partner, pg, premium, sponsered, category, searchQuery.minprice, searchQuery.maxprice, location]);

    

    return(
        <div className='container mt-5'>
            <Typography variant='h4' style={{textAlign:'center'}}> {category.toUpperCase()} Results </Typography>

            <div className='mt-3'>
                <SearchBar />
            </div>

            {productToShow.length > 0 ? 
            <div style={{float:'right'}}>
                <SortHandler sort={sort} setSort={setSort} category={category} sortReverse={sortReverse} />
            </div>
            : null }

            <div className='mt-3' >
                <Typography variant='body1'>Showing results for: </Typography>
                <Chip className='mr-1' size='small' icon={<ClassTwoToneIcon />} label={category.toUpperCase()} /> <br className='d-block d-lg-none' />
                {searchQuery.place && <><Tooltip title={searchQuery.place}><Chip style={{width:'200px', overflow:'ellipsis'}} className='mr-1' size='small' icon={<SchoolTwoToneIcon />} label={searchQuery.place} /></Tooltip>  <br className='d-block d-lg-none' /> </>}
                {searchQuery.minprice && <Chip className='mr-1' size='small' icon={<AttachMoneyTwoToneIcon />} label={`${searchQuery.minprice} - ${searchQuery.maxprice}`} /> }
            </div>
            <div style={{clear:'both'}} /> 
            
            <br /> <br />
            {productToShow.length > 0 ? 
                <RenderListings productToShow={productToShow} category={category} setProducts={setProducts} location={location} />
                : <SkeletonLoader number={4} where='listings' /> 
            }
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

    if(location!=='null'){
        filteredProducts = filteredProducts.map((product)=>calcDistance(product,location))

        let sortedProducts =  filteredProducts.sort(function(a,b){
            return a.distance-b.distance });

        return sortedProducts;
    }

    return filterProducts;
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
};


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