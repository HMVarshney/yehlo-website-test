import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import {TextField, FormControlLabel, Checkbox, Button, Box, Grid, Paper, Slider, makeStyles} from '@material-ui/core';
import SearchBase from './searchBase';

//icons
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles1 = makeStyles({
    root:{
        margin: props => props.element === 'searchbarButton' ? '0rem' : '1rem',
        borderRadius:'50px',
        width: props => props.element === 'searchbarButton' ? null : '150px',
        // backgroundColor: props => props.element === 'searchbarButton' ? null : 'rgba(46,36,44,0.8)',
        // color: props => props.element === 'searchbarButton' ? null : 'white'
    },
        
});

const useStyles2 = makeStyles({
    root: {
        color: 'white',
        background:'white'
    }
})

const SearchBar = (props) => {

    const {searchAttr,  setSearchAttr, collegeList, categoryLabels} = props;

    const [priceDropdownOpen, togglePriceDropdown] = useState(false);
    const [categoryDropdownOpen, toggleCategoryDropdown] = useState(false);

    const classesBB = useStyles1({element:'searchbarButton'});
    const classesTag = useStyles1();
    const textfield = useStyles2();

    return (
        <>
        <div className='row justify-content-center align-items-center tags_list'>
                {categoryLabels.map((label)=>(
                    <div className='col-lg-2'>
                        <Button className={classesTag.root} size='small' onClick={()=>setSearchAttr({...searchAttr, category:label})}  
                            variant={searchAttr.category===label?'contained':'outlined'} color='primary' >{label}</Button>
                    </div>
                ))}
                   
                {/* <AddCircleTwoToneIcon style={{cursor:'pointer'}} color='primary' onClick={()=>setSearchAttr({...searchAttr, category: categoryLabels})} /> */}
            </div>
        <Paper elevation={3} className='searchbar_container p-2'>
            <Grid container justify='center' alignItems='center' spacing={2}>

                <Grid item lg={6} xs={12}>
                    <div className='search_box'>
                        <Autocomplete
                            options={collegeList}
                            getOptionLabel={(option) => option}
                            fullWidth={true}
                            onChange={(event)=>setSearchAttr({...searchAttr, college: [...searchAttr.college, event.target.innerHTML]})}
                            renderInput={(params) => <TextField
                                value={searchAttr.college} 
                                onChange={(event)=>setSearchAttr({...searchAttr, college: event.target.value})}
                                onKeyUp={(event)=>{
                                    if(event.keyCode === 13){
                                        setSearchAttr({...searchAttr, college: event.target.value})
                                    }
                                }} {...params} label="College Search.." variant="outlined" />} 
                        />
                    </div>
                </Grid>
                <Grid item xs className='d-md-none d-block'>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} className={classesBB.root} size='large' onClick={()=>{
                        toggleCategoryDropdown(!categoryDropdownOpen);
                        togglePriceDropdown(false);}} 
                        variant='outlined'>Categories</Button>  
                    
                    {categoryDropdownOpen && 
                    <div className='search_bar_dropdowns'>
                        {categoryLabels.map((label)=>(<>
                            <FormControlLabel label={label.toUpperCase()} control={<Checkbox icon={<CheckBoxOutlineBlankOutlinedIcon color='primary' />} color='primary' name={label} 
                                checked={searchAttr.category === label} onChange={()=>setSearchAttr({...searchAttr, category: label})} />} />
                            <br /></>
                        ))}
                    </div> }                            
                </Grid>

                <Grid item lg={2} xs>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} className={classesBB.root} size='large' onClick={()=>{
                        togglePriceDropdown(!priceDropdownOpen);
                        toggleCategoryDropdown(false);}} 
                        variant='outlined' color='primary'><span className='fa fa-rupee-sign  d-md-none d-block' /><span className='d-none d-lg-block'>Price</span> </Button>  
                    
                    {priceDropdownOpen && 
                    <Box className='search_bar_dropdowns search_bar_dropdown_price'>
                        <h6 style={{color:'white'}}>Price Range: </h6>
                        <div className='search_bar_price_textfields'>
                            <div><TextField className={textfield.root} size='small' label='Min Price' variant='filled' 
                                value={searchAttr.priceValue[0]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue: [event.target.value, searchAttr.priceValue[1]]})} /></div>  
                            
                            <div className='mt-lg-0 mt-2 ml-0 ml-lg-2'><TextField className={textfield.root} size='small' label='Max Price' variant='filled' 
                                value={searchAttr.priceValue[1]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue:[searchAttr.priceValue[0],event.target.value]})} /></div>
                        </div>
                        <br /><br />
                        <Slider style={{width:'100%'}} value={searchAttr.priceValue} onChange={(e,newValue)=>setSearchAttr({...searchAttr, priceValue:newValue})}
                        aria-labelledby="range-slider" valueLabelDisplay='on' step={200} max={20000} /> 
                    </Box> }
                </Grid>
                
                <Grid item xs className='d-block d-md-none'>
                <a href={`/listings/${searchAttr.category}/?college=${searchAttr.college}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}`}>
                    <div className='search_mobile_icon'>
                    <span style={{color:'white'}} className='fa fa-search' /></div>
                </a>
                </Grid>

                <Grid item lg={1} className='d-none d-lg-block'>
                    <Button href={`/listings/${searchAttr.category}/?college=${searchAttr.college}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}`} 
                    startIcon={<SearchOutlinedIcon />} className={classesBB.root} 
                    variant='contained' style={{backgroundColor:'#2e242c', color:'white'}} disabled={searchAttr.category===''?true:false}>Search</Button>
                </Grid>

            </Grid>    
            </Paper>
            
       </>
    );
}
 
export default SearchBase(SearchBar);

