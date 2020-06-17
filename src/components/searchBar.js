import React, { useState } from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField, FormControlLabel, Checkbox, Button, Box, Grid, Paper} from '@material-ui/core';

//icons
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

const SearchBar = (props) => {
    const [searchAttr, setSearchAttr] = useState({
        college:'',
        minPrice:50, maxPrice:2000,
        category: [],
    });

    const [priceDropdownOpen, togglePriceDropdown] = useState(false);
    const [categoryDropdownOpen, toggleCategoryDropdown] = useState(false);

    const priceLabels = [50, 100, 500, 1000, 2000];
    const categoryLabels = ['pg', 'Services', 'Second Hand'];

    const handleCategoryChange = (selected) => {
        const index = searchAttr.category.indexOf(selected);
        if (index < 0) {
          searchAttr.category.push(selected);
        } else {
          searchAttr.category.splice(index, 1);
        }
        setSearchAttr({...searchAttr, category:[...searchAttr.category]});
    }

    return (
        <Paper style={{borderRadius:'50px', paddingTop:'10px'}} className='d-none d-md-block'>
        <div className='row justify-content-center'>  
        <div className='col-10'>
            <Grid container justify='center' alignItems='center' spacing={5}>
                <Grid item xs={6}>
                    <div className='search_box'>
                        <Autocomplete
                            options={collegeList}
                            getOptionLabel={(option) => option}
                            style={{width:'100%'}}
                            onChange={(event)=>setSearchAttr({...searchAttr, college: event.target.innerHTML})}
                            renderInput={(params) => <TextField
                                value={searchAttr.college} 
                                onChange={(event)=>setSearchAttr({...searchAttr, college: event.target.value})}
                                onKeyUp={(event)=>{
                                    if(event.keyCode === 13){
                                        setSearchAttr({...searchAttr, college: event.target.value})
                                    }
                                }} 
                                style={{width:'100%'}} {...params} label="College Search.." variant="outlined" />} 
                        />
                    </div>
                </Grid>
                {/* <Grid item>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} style={{borderRadius:'50px'}} size='large' onClick={()=>{
                        toggleCategoryDropdown(!categoryDropdownOpen);
                        togglePriceDropdown(false);}} 
                        variant='outlined'>Categories</Button>  
                    
                    {categoryDropdownOpen && 
                    <Box className='search_bar_dropdowns'>
                        {categoryLabels.map((label)=>(<>
                            <FormControlLabel label={label} control={<Checkbox icon={<CheckBoxOutlineBlankOutlinedIcon color='primary' />} color='primary' name={label} 
                                checked={searchAttr.category.includes(label)} onChange={()=>handleCategoryChange(label)} />} />
                            <br /></>
                        ))}
                    </Box> }                            
                </Grid> */}
                <Grid item>
                    <Button endIcon={<ArrowDropDownOutlinedIcon />} style={{borderRadius:'50px'}} size='large' onClick={()=>{
                        togglePriceDropdown(!priceDropdownOpen);
                        toggleCategoryDropdown(false);}} 
                        variant='outlined'>Price </Button>  
                    
                    {priceDropdownOpen && 
                    <Box className='search_bar_dropdowns'>
                        <h6 style={{padding:'0', margin:'0', textAlign:'center', color:'white'}}>Price Range: </h6>
                        <div className='row justify-content-center'>
                            <div>
                                <select className='price_select mt-2' 
                                    value={searchAttr.minPrice} onChange={(event)=>setSearchAttr({...searchAttr, minPrice: event.target.value })}>
                                    {priceLabels.map((label)=>(<option style={{color:'black'}}>{label}</option>))}
                                </select>
                            </div>
                            <span className='pr-2 pl-2 mt-2'>to</span>
                            <div>
                                <select className='price_select mt-2' 
                                    value={searchAttr.maxPrice} onChange={(event)=>setSearchAttr({...searchAttr, maxPrice: event.target.value })}>
                                    {priceLabels.map((label)=>(<option style={{color:'black'}}>{label}</option>))}
                                </select>
                            </div>
                            </div>
                        </Box> }
                        </Grid>
                <Grid item>
                    <Button href='/listings' startIcon={<SearchOutlinedIcon />} style={{borderRadius:'50px'}} className='pt-2 pb-2' variant='outlined' color='primary'> Search</Button>
                </Grid>
            </Grid>
        </div></div>
        <div className='row justify-content-center'>
            {categoryLabels.map((label)=>(
                <Button style={{borderRadius:'50px', margin:'1rem', width:'150px'}} size='small' onClick={()=>setSearchAttr({...searchAttr, category:searchAttr.category.includes(label)?'':label})}  variant={searchAttr.category.includes(label)?'contained':'outlined'} color='primary'>{label}</Button>
            ))}
            {/* <Button style={{borderRadius:'50px'}} size='small' onClick={()=>setSearchAttr({...searchAttr, category:searchAttr.category.includes('pg')?'':'pg'})}  variant={searchAttr.category.includes('pg')?'contained':'outlined'} color='primary'>PGs</Button>
            <Button style={{borderRadius:'50px'}} size='small' onClick={()=>setSearchAttr({...searchAttr, category:'buy'})}  variant='contained' color='primary'>Second Hand Prodcut</Button>
            <Button style={{borderRadius:'50px'}} size='small' onClick={()=>setSearchAttr({...searchAttr, category:'services'})}  variant='contained' color='primary'>Yehlo Services</Button> */}
        </div>
        {/* <div className='row justify-content-center'>            
            <AddCircleTwoToneIcon style={{cursor:'pointer'}} color='primary' onClick={()=>setSearchAttr({...searchAttr, category: categoryLabels})} />
        </div> */}
        </Paper>
    );
}

const collegeList = [ 'Acharya Narendra Dev College',
                        'Aditi Mahavidyalaya',
                        'Ahilya Bai College of Nursing',
                        'Amar Jyoti Institute of Physiotherapy',
                        'Aryabhatta College',
                        'Atma Ram Sanatan Dharma College',
                        'Ayurvedic & Unani Tibia College',
                        'Bhagini Nivedita College',
                        'Bharati College',
                        'Bhaskaracharya College of Applied Sciences',
                        'Bhim Rao Ambedkar College',
                        'Chacha Nehru Bal Chikitsalaya',
                        'College of Art',
                        'College of Nursing at Army Hospital',
                        'College of Vocational Studies',
                        'Daulat Ram College',
                        'Deen Dayal Upadhyaya College',
                        'Delhi College of Arts & Commerce',
                        'Delhi Institute of Pharmaceutical Sciences and Research'
                    ];

 
export default SearchBar;


{/* <form>
            <div className="row">
                <Autocomplete
                    id="combo-box-demo"
                    options={collegeList}
                    getOptionLabel={(option) => option}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="College" variant="outlined" />} />
            
            <div className="col-lg-3">
                <div className="form_group">
                <select className="search_select">
                    <option data-display="location">
                    Bnagladesh
                    </option>
                    <option value={1}>India</option>
                    <option value={2}>Chaina</option>
                    <option value={3}>America</option>
                    <option value={4}>Russia</option>
                </select>
                <i className="fas fa-location-arrow" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="form_group">
                <select className="search_select">
                    <option data-display="Categories">
                    Real Estate
                    </option>
                    <option value={1}>travel</option>
                    <option value={2}>Beauty &amp; Spa</option>
                    <option value={3}>Night Club</option>
                    <option value={4}>Shopping</option>
                    <option value={4}>Resturaunt</option>
                </select>
                <i className="fas fa-list" />
                </div>
            </div>
            <div className="col-lg-2">
                <div className="filter_button">
                <button className="search_btn">Search</button>
                </div>
            </div>
            </div>
</form> */}