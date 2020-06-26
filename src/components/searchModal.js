import React, { useState } from 'react';
import { TextField, Typography, Box, Button, Slider, FormControlLabel, Checkbox } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Modal, ModalBody, ModalHeader, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import SearchBase from './searchBase';

//icons
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';


const SearchModal = (props) => {

    const [activeTab, setActiveTab] = useState('1');
    const{searchAttr, setSearchAttr, categoryLabels, collegeList} = props;
    
    return (  
        <Modal size='lg' isOpen={props.modalOpen} toggle={()=>props.setModalOpen(!props.modalOpen)}>
            <div className='search-modal'>
            <ModalHeader className='row justify-content-center'><h4 className='search_text'>What are you looking for?</h4></ModalHeader>
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
                            <div className='search_box'>
                                <Autocomplete
                                    options={collegeList}
                                    getOptionLabel={(option) => option}
                                    fullWidth={true}
                                    value={searchAttr.college}
                                    onKeyUp={(event)=>{
                                        if(event.keyCode === 13){
                                            setSearchAttr({...searchAttr, college:event.target.value})
                                        }
                                    }}
                                    onChange={(event)=>setSearchAttr({...searchAttr, college:event.target.innerHTML})}
                                    renderInput={(params) => <TextField {...params} label="College Search.." variant="outlined" />} 
                                />  
                            </div>
                        </TabPane>
                        <TabPane tabId='3'>
                            <Typography>Price Range: </Typography>
                            <br />
                            <div className='search_modal_price_textfields'>
                                <div><TextField size='small' label='Min Price' variant='outlined' 
                                    value={searchAttr.priceValue[0]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue: [event.target.value, searchAttr.priceValue[1]]})} /></div>  
                                <div className='mt-lg-0 mt-2 ml-0 ml-lg-2'><TextField className='mt-lg-0 mt-sm-2' size='small' label='Max Price' variant='outlined' 
                                    value={searchAttr.priceValue[1]} onChange={(event)=>setSearchAttr({...searchAttr, priceValue:[searchAttr.priceValue[0],event.target.value]})} /></div>
                            </div>
                            <br /><br />
                            <div style={{ width:'70%'}}> 
                                <Slider style={{width:'100%'}} value={searchAttr.priceValue} 
                                    onChange={(event,newValue)=>{ setSearchAttr({...searchAttr, priceValue:newValue})}}
                                aria-labelledby="range-slider" valueLabelDisplay='on' step={200} max={20000} /> 
                            </div>
                        </TabPane>

                    </TabContent>
                </ModalBody>
                <ModalFooter>
                    <Button href={`/listings/${searchAttr.category}/?college=${searchAttr.college}&maxprice=${searchAttr.priceValue[1]}&minprice=${searchAttr.priceValue[0]}`} variant='contained' color='primary'><span className='fa fa-search'/> Search</Button>
                </ModalFooter>
            </div>
        </Modal>
     );
}
 
export default SearchBase(SearchModal);