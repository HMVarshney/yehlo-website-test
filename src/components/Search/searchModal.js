import React, { useState } from 'react';
import { TextField, Typography, Box, Button, Slider, FormControlLabel, Checkbox } from '@material-ui/core';
import { Modal, ModalBody, ModalHeader, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import SearchBase from './searchBase';
import Map from '../googleMap';

//icons
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';


const SearchModal = (props) => {

    const [activeTab, setActiveTab] = useState('1');
    const [mapOpen, setMapOpen] = useState(false);
    const{searchAttr, setSearchAttr, categoryLabels, collegeList,
       styles: { sliderStyle, textfield }} = props;
    
    return (  
        <Modal size='lg' isOpen={props.modalOpen} toggle={()=>props.setModalOpen(!props.modalOpen)}>
            <ModalHeader><h4 className='search_text'>What are you looking for?</h4></ModalHeader>
                <ModalBody>

                    <Nav tabs>
                        <NavItem>
                            <NavLink onClick={() => setActiveTab('1') } active={activeTab==='1'}>
                                <span className='fa fa-list mr-1' />Categories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => setActiveTab('2')} active={activeTab==='2'}>
                                <span className='fa fa-location-arrow mr-1' />Location
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => setActiveTab('3') } active={activeTab==='3'}>
                                <span className='fa fa-money-bill mr-1' />Budget
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className='mt-3'>

                        <TabPane tabId='1'>
                            <div>
                                <Box className='search_modal_dropdowns'>
                                    {categoryLabels.map((label)=>(<>
                                        <FormControlLabel label={label.toUpperCase()} control={<Checkbox icon={<CheckBoxOutlineBlankOutlinedIcon color='primary' />} color='primary' name={label} 
                                            checked={searchAttr.category === label} onChange={()=>setSearchAttr({...searchAttr, category: label})} />} />
                                        <br /></>
                                    ))}
                                </Box>                   
                            </div>
                        </TabPane>
                        <TabPane tabId='2'>
                            {/* <div className='search_box'>
                                <Autocomplete
                                    classes={{root: textfield.autocompleteRoot}}
                                    disabled={!collegeList.length>0}
                                    options={collegeList.length > 0 ? collegeList : null}
                                    getOptionLabel={(option) => option.name}
                                    fullWidth={true}
                                    onChange={(event, newValue)=> setSearchAttr({...searchAttr, college: newValue ? newValue : {name: '', location: null}})}
                                    renderInput={(params) =><TextField {...params} label="College Search.." variant="filled" />} 
                                />
                            </div> */}
                            <TextField 
                                style={{cursor:'pointer'}}
                                disabled 
                                onClick={()=>setMapOpen(true)} 
                                fullWidth 
                                classes={{root: textfield.autocompleteRoot}} 
                                label={searchAttr.place.name === '' ? 'Location' : searchAttr.place.name} variant='filled' 
                            />
                            <Map setSearchAttr={setSearchAttr} mapOpen={mapOpen} setMapOpen={()=>setMapOpen(!mapOpen)}/>
                        </TabPane>
                        <TabPane tabId='3'>
                            <Box className='search_modal_dropdowns'>
                                <Typography>Price Range: </Typography>
                                <br />
                                <div className='search_modal_price_textfields'>
                                    <div><TextField classes={{root:textfield.root}} size='small' label='Min Price' variant='filled' 
                                        value={searchAttr.priceValue[0]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue: [event.target.value, searchAttr.priceValue[1]]})} /></div>  
                                    <div className='mt-lg-0 mt-2 ml-0 ml-lg-2'><TextField classes={{root:textfield.root}} className='mt-lg-0 mt-sm-2' size='small' label='Max Price' variant='filled' 
                                        value={searchAttr.priceValue[1]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue:[searchAttr.priceValue[0],event.target.value]})} /></div>
                                </div>
                                <br /><br />
                                <div style={{ width:'70%'}}> 
                                <Slider
                                    classes={{thumb: sliderStyle.thumb, root: sliderStyle.modalRoot}}
                                    style={{width:'100%'}} value={searchAttr.priceValue} onChange={(e,newValue)=>setSearchAttr({...searchAttr, priceValue:newValue})}
                                    valueLabelDisplay='on' step={200} max={20000} /> 
                                </div>
                            </Box>
                        </TabPane>

                    </TabContent>
                </ModalBody>
                <ModalFooter>
                    <Button style={{background:'#1e272c', color:'white'}} 
                        href={`/listings/${searchAttr.category}/?place=${searchAttr.place.name}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}`} variant='contained' ><span className='fa fa-search'/> Search</Button>
                </ModalFooter>
        </Modal>
     );
}
 
export default SearchBase(SearchModal);