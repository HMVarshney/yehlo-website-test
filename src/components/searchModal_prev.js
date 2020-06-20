// import React, { useState } from 'react';
// import { TextField, Typography, Box, Tabs, Tab, Button, Slider, FormControlLabel, Checkbox } from '@material-ui/core';
// import { Autocomplete } from '@material-ui/lab';
// import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
// import SearchBase from './searchBase';

// //icons
// import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

// const cities = ['Dwarka', 'Karol Bagh', 'North Campus', 'South Campus'];

// const SearchModal = (props) => {

//     const {searchAttr, setSearchAttr, categoryLabels, collegeList} = props;

//     const [tabActive, setTabActive] = useState(0);
//     const [checkbox, setChecked] = useState({
//         buy: true,
//         pg: true,
//         services: true,
//     })

//     const handleTabChange = (e,newValue) => {
//         setTabActive(newValue);
//     }

//     // const SearchUI = (props) => {
//     //     return(
//     //         props.data.map((city) => (
//     //         <Card className='mt-2'>
//     //             <CardBody>
//     //                 <Grid container spacing={0}>
//     //                     <Grid item xs={6}><img width='40%' src='assets/images/g_3.jpg' /></Grid>
//     //                     <Grid item xs={6}>
//     //                         <CardTitle><h6>The Green Apartments</h6></CardTitle>
//     //                         <CardSubtitle>{city}</CardSubtitle>
//     //                         <CardText>Perfect for College Students</CardText>
//     //                     </Grid>
//     //                 </Grid>
//     //             </CardBody>
//     //         </Card>
//     //     ))
//     //     );
//     // }

//     const TabPanel = (props) => {
//         const {value, index} = props;
//         const [citySelected, changeCity] = useState(null);
//         const [sliderValue, setSliderValue] = useState([0,5000]);
//         // const [collegeDropdownOpen, setDropdownOpen] = useState(false);

//         // const CollegeBox = (props) => {
//         //    if(props.show){
//         //        return(
//         //            <Box>
//         //                Relavant college list rendered here
//         //            </Box>
//         //        );
//         //    }
//         //    return null;
//         // }
//         return(
//             value === index && <Box component='div' p={3}>
//                 {index === 0 && 
//                 <>
//                 <div>
//                     <Box className='search_modal_dropdowns'>
//                         {categoryLabels.map((label)=>(<>
//                             <FormControlLabel label={label.toUpperCase()} control={<Checkbox icon={<CheckBoxOutlineBlankOutlinedIcon color='primary' />} color='primary' name={label} 
//                                 checked={searchAttr.category === label} onChange={()=>setSearchAttr({...searchAttr, category: label})} />} />
//                             <br /></>
//                         ))}
//                     </Box>                   
//                 </div>
//                 </>
//                 }
//                 {index === 1 &&
//                 <>
//                     <div className='search_box'>
//                         <Autocomplete
//                             options={collegeList}
//                             getOptionLabel={(option) => option}
//                             fullWidth={true}
//                             value={searchAttr.college}
//                             onChange={(event)=>{
//                                 let obj = searchAttr;
//                                 obj.college=event.target.innerHTML;
//                                 setSearchAttr(obj) }}
//                             renderInput={(params) => <TextField
//                                 // value={searchAttr.college} 
//                                 // onChange={(event)=>{
//                                 //     setSearchAttr({...searchAttr, college:event.target.value}) }}
//                                 // onKeyUp={(event)=>{
//                                 //     if(event.keyCode === 13){
//                                 //         let obj = searchAttr; obj.college = event.target.value;
//                                 //         setSearchAttr(obj);
//                                 //     }
//                                 // }} 
//                                 {...params} label="College Search.." variant="outlined" />} 
//                         />  
//                     </div>
//                     {/* <FormControl>
//                         <NativeSelect onChange={(e)=>changeCity(e.target.value)}>
//                             <option value=''>Select</option>
//                             {cities.map((city, i) => <option key={i} value={city}>{city}</option>)}
//                         </NativeSelect>
//                     </FormControl>
//                 {citySelected ? 
//                 <SearchUI data={cities} /> : null} */}
//                 </> }

//                 {index === 2 && 
//                     <>
//                         <Typography>Price Range: </Typography>
//                         <div style={{width:'50%'}}>
//                         <Slider style={{width:'100%'}} value={searchAttr.priceValue} 
//                             onChange={(event,newValue)=>{
//                                 let obj = searchAttr; obj.priceValue = newValue;
//                                 setSearchAttr(obj) }}
//                         aria-labelledby="range-slider" valueLabelDisplay='auto' step={500} max={20000} /> 
//                         </div>
//                     </>
//                 }
//             </Box>
//         );
//     }
//     console.log(searchAttr.college)
//     return(
//         <Modal size='lg' isOpen={props.modalOpen} toggle={()=>props.setModalOpen(!props.modalOpen)}>
//             <div className='search-modal'>
//             <ModalHeader className='row justify-content-center'><h4 className='search_text'>What are you looking for?</h4></ModalHeader>
//                 <ModalBody>
//                     <Tabs value={tabActive} onChange={handleTabChange}>
//                         <Tab label='Categories' />
//                         <Tab label='Location'/>
//                         <Tab label='Budget'/>
//                     </Tabs>
//                     <TabPanel value={tabActive} index={0} />
//                     <TabPanel value={tabActive} index={1} />
//                     <TabPanel value={tabActive} index={2} />
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button href={`/listings/?items=${searchAttr.category}&college=${searchAttr.college}&max-price=${searchAttr.priceValue[1]}&min-price=${searchAttr.priceValue[0]}`} variant='contained' color='primary'><span className='fa fa-search'/> Search</Button>
//                 </ModalFooter>
//             </div>
//         </Modal>
//     );
// }

// export default SearchBase(SearchModal);