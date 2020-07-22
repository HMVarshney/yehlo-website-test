import React, { useState } from 'react';
import {TextField, FormControlLabel, Checkbox, Button, Box, Grid, Paper, Slider } from '@material-ui/core';
import SearchBase from './searchBase';
import Map from '../googleMap';
import { Link } from 'react-router-dom';

//icons
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const SearchBar = (props) => {

    const {searchAttr,  setSearchAttr, categoryLabels,
       styles:{buttonStyle, paperStyle, tagStyle, sliderStyle, textfield} } = props;

    //state
    const [priceDropdownOpen, togglePriceDropdown] = useState(false);
    const [categoryDropdownOpen, toggleCategoryDropdown] = useState(false);
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <>
        <div className='row justify-content-center align-items-center tags_list'>
                {categoryLabels.map((label)=>(
                    <div className='col-lg-2'>
                        <Button classes={{root: tagStyle.root, contained: tagStyle.contained}} size='small' onClick={()=>setSearchAttr({...searchAttr, category:label})}  
                            variant={searchAttr.category===label?'contained':'outlined'} >{label}</Button>
                    </div>
                ))}
                   
                {/* <AddCircleTwoToneIcon style={{cursor:'pointer'}} color='primary' onClick={()=>setSearchAttr({...searchAttr, category: categoryLabels})} /> */}
            </div>
        <Paper classes={{ root: paperStyle.root }} elevation={3} className='searchbar_container p-2'>
            <Grid container justify='center' alignItems='center' spacing={2}>

                {/* <Grid item lg={3} md={3} xs={6}>
                    <div className='search_box'>
                        <Autocomplete
                            classes={{root: textfield.autocompleteRoot}}
                            disabled={!collegeList.length>0}
                            options={collegeList.length > 0 ? collegeList : null}
                            getOptionLabel={(option) => option.name}
                            fullWidth={true}
                            onChange={(event, newValue)=> setSearchAttr({...searchAttr, college: newValue ? newValue : {name: '', location: null}})}
                            renderInput={(params) =><TextField {...params} label="College Search.." variant="filled" />} 
                        />
                    </div>
                </Grid> */}
                <Grid item lg={6} md={6} xs={12}>
                    <TextField 
                        style={{cursor:'pointer'}}
                        disabled 
                        onClick={()=>setMapOpen(true)} 
                        fullWidth 
                        classes={{root: textfield.autocompleteRoot}} 
                        label={searchAttr.place.name === '' ? 
                            <><span style={{color:'#6494ed'}} className='fas fa-map-marker-alt mr-2' /><span>Location</span> </>
                        : <><span style={{color:'#6494ed'}} className='fas fa-map-marker-alt mr-2' /><span>{searchAttr.place.name}</span> </>
                         } variant='filled' />
                </Grid>

                <Map setSearchAttr={setSearchAttr} searchAttr={searchAttr} mapOpen={mapOpen} setMapOpen={(value)=>setMapOpen(value)}/>

                <Grid item xs md className='d-lg-none d-block'>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} className={buttonStyle.root} size='large' onClick={()=>{
                        toggleCategoryDropdown(!categoryDropdownOpen);
                        togglePriceDropdown(false);}} 
                        variant='outlined'>Categories</Button>  
                    
                    {categoryDropdownOpen && 
                    <div className='search_bar_dropdowns'>
                        {categoryLabels.map((label)=>(<>
                            <FormControlLabel label={label.toUpperCase()} control={<Checkbox icon={<CheckBoxOutlineBlankOutlinedIcon color='inherit' />} color='primary' name={label} 
                                checked={searchAttr.category === label} onChange={()=>setSearchAttr({...searchAttr, category: label})} />} />
                            <br /></>
                        ))}
                    </div> }                            
                </Grid>

                <Grid item lg={2} xs md>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} className={buttonStyle.root} size='large' onClick={()=>{
                        togglePriceDropdown(!priceDropdownOpen);
                        toggleCategoryDropdown(false);}} 
                        variant='outlined' ><span className='fa fa-rupee-sign  d-lg-none d-block' /><span className='d-none d-lg-block'>Price</span> </Button>  
                    
                    {priceDropdownOpen && 
                    <Box className='search_bar_dropdowns search_bar_dropdown_price'>
                        <h6 style={{color:'white'}}>Price Range: </h6>
                        <div className='search_bar_price_textfields'>
                            <div><TextField className={textfield.root} size='small' label='Min Price' variant='filled' 
                                value={searchAttr.priceValue[0]} /></div>  
                            
                            <div className='mt-lg-0 mt-2 ml-0 ml-lg-2'><TextField className={textfield.root} size='small' label='Max Price' variant='filled' 
                                value={searchAttr.priceValue[1]} /></div>
                        </div>
                        <br /><br />
                        <Slider
                            classes={{thumb: sliderStyle.thumb, root: sliderStyle.root}}
                            style={{width:'100%'}} value={searchAttr.priceValue} onChange={(e,newValue)=>setSearchAttr({...searchAttr, priceValue:newValue})}
                            valueLabelDisplay='on' step={200} max={20000} /> 
                    </Box> }
                </Grid>
                
                <Grid item md xs className='d-block d-lg-none'>
                <Link to={`/listings/${searchAttr.category}/?place=${searchAttr.place.name}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}&lat=${searchAttr.place.location.lat}&lng=${searchAttr.place.location.lng}`}>
                    <div className='search_mobile_icon'>
                    <span style={{color:'white'}} className='fa fa-search' /></div>
                </Link>
                </Grid>

                <Grid item lg={1} className='d-none d-lg-block'>
                    <Link to={`/listings/${searchAttr.category}/?place=${searchAttr.place.name}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}&lat=${searchAttr.place.location.lat}&lng=${searchAttr.place.location.lng}`}>
                    <Button
                    startIcon={<SearchOutlinedIcon />} className={buttonStyle.root} 
                    variant='outlined' disabled={searchAttr.category===''?true:false}>Search</Button>
                    </Link>
                </Grid>

            </Grid>    
            </Paper>
       </>
    );
}
 
export default SearchBase(SearchBar);



