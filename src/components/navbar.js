import React, {useState, useEffect} from 'react';
import {Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Nav, NavLink, Modal, ModalHeader, ModalBody, Card, CardBody, CardText, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Button, Tabs, Tab, Box, FormControl, NativeSelect, Grid, Typography, Slider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import img1 from '../assets/images/g_3.jpg';


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

const cities = ['Dwarka', 'Karol Bagh', 'North Campus', 'South Campus'];


const Navigationbar = () => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [collegeDropdownOpen, setDropdown] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSearchVisible(window.scrollY > 150);
            // setScroll(window.scrollY)
        }
        window.addEventListener("scroll", onScroll);;    
      });

    return ( 
        <>
        <Navbar className='headerbar' light expand='md' fixed='top'>
                <div style={{fontSize:'17px'}} className='container animate__animated animate__fadeInDown animate__faster'> 
                        <NavbarBrand><a href='/'>YEHLO</a></NavbarBrand>
                        <NavbarToggler onClick={()=>setNavOpen(!navOpen)} />
                        <Collapse isOpen={navOpen} navbar>
                        <div className={searchVisible ? 'd-block d-lg-none d-xl-none d-md-none col-10' : 'col-10'}>
                            <Nav navbar>
                                <NavItem className='d-lg-none d-xl-none d-md-none d-sm-block mt-3 mt-lg-0'>
                                    <CollegeDropdown data={collegeList} open={collegeDropdownOpen} handleOpen={setDropdown}/>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/'>  Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/listings'>  Listings </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/about'>  About </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/contact'> Contact </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                            <Nav navbar>
                                <NavItem className='d-none d-md-block d-xl-block d-lg-block' style={{width:'150px'}}> 
                                    <Button variant='contained' component={Link} to='/getApp'><span className='fa fa-plus mr-1'></span> Add Listing </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        {searchVisible ? <SearchBar modalOpen={()=>setModalOpen(!modalOpen)} /> : null}
                    </div>
            </Navbar>
            <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
     );
}

const CollegeDropdown = (props) => {
    return(
        <Dropdown inNavbar isOpen={props.open} toggle={() => props.handleOpen(!props.open)} >
            <DropdownToggle className='offset-md-0 offset-1 width' color='dark' caret style={{width:'100%'}}> Choose your College </DropdownToggle>
            <DropdownMenu className='college_list_dropdown_menu'>
                {props.data.map((college,i)=>(
                    <DropdownItem key={i} className='college_list_dropdown_item' tag='span'><a href='/listings'>{college}</a></DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

const SearchModal = (props) => {

    const [tabActive, setTabActive] = useState(0);

    const handleTabChange = (e,newValue) => {
        setTabActive(newValue)
    }

    const SearchUI = (props) => {
        return(
            props.data.map((city) => (
            <Card className='mt-2'>
                <CardBody>
                    <Grid container spacing={0}>
                        <Grid item xs={6}><img width='40%' src={img1} /></Grid>
                        <Grid item xs={6}>
                            <CardTitle><h6>The Green Apartments</h6></CardTitle>
                            <CardSubtitle>{city}</CardSubtitle>
                            <CardText>Perfect for College Students</CardText>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        ))
        );
    }

    const TabPanel = (props) => {
        const {value, index} = props;
        const [citySelected, changeCity] = useState(null);
        const [sliderValue, setSliderValue] = useState([0,100]);
        const [collegeDropdownOpen, setDropdownOpen] = useState(false);

        // const CollegeBox = (props) => {
        //    if(props.show){
        //        return(
        //            <Box>
        //                Relavant college list rendered here
        //            </Box>
        //        );
        //    }
        //    return null;
        // }
        
        return(
            value === index && <Box component='div' p={3}>
                {index === 1 &&
                <>
                <FormControl>
                    <NativeSelect onChange={(e)=>changeCity(e.target.value)}>
                        <option value=''>Select</option>
                        {cities.map((city, i) => <option key={i} value={city}>{city}</option>)}
                    </NativeSelect>
                </FormControl>
                {citySelected ? 
                <SearchUI data={cities} /> : null}
                </>}
                {index === 0 && 
                    <>
                    <CollegeDropdown data={collegeList} open={collegeDropdownOpen} handleOpen={()=>setDropdownOpen(!collegeDropdownOpen)} />
                    </>
                }
                {index === 2 && 
                    <>
                        <Typography>Price Range: </Typography>
                        <div style={{width:'50%'}}>
                            <Slider value={sliderValue} onChange={(e,newValue)=>setSliderValue(newValue)}
                            aria-labelledby="range-slider" valueLabelDisplay='auto' /> 
                            <Button><span className='fa fa-lg fa-search'></span> Search</Button>
                        </div>
                    </>
                }
            </Box>
        );
    }

    return(
        <Modal size='lg' isOpen={props.modalOpen} toggle={()=>props.setModalOpen(!props.modalOpen)}>
            <ModalBody>
                <Tabs value={tabActive} onChange={handleTabChange}>
                    <Tab label='College' />
                    <Tab label='Location'/>
                    <Tab label='Budget'/>
                </Tabs>
                <TabPanel value={tabActive} index={0} />
                <TabPanel value={tabActive} index={1} />
                <TabPanel value={tabActive} index={2} />
            </ModalBody>
        </Modal>
    );
}

 
const SearchBar = (props) => {

    return(
        <div className='d-lg-block d-xl-block d-md-block d-none container animate__animated animate__fadeInUp animate__faster'>
        <div className='offset-md-3'>
            <button className='search_button' onClick={props.modalOpen}><span className='search_text'>What are you looking for?</span></button>
        </div>
        </div>
    );
}

export default Navigationbar;