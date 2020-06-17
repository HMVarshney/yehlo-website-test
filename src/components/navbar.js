import React, {useState, useEffect} from 'react';
import {Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Nav, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import SearchModal from './searchModal';


const Navigationbar = () => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [collegeDropdownOpen, setDropdown] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSearchVisible(window.scrollY > 500);
            window.scrollY>500 ? document.getElementById('navbar').style.background = 'rgb(255,255,255)' : document.getElementById('navbar').style.background = 'transparent';
            // setScroll(window.scrollY)
        }
        window.addEventListener("scroll", onScroll);;    
    });

    return ( 
        <>
        <Navbar id='navbar' className='headerbar' light expand='md' fixed='top'>
            <div id='navbar-div' style={{fontSize:'17px'}} className='container animate__animated animate__fadeInDown animate__faster'> 
                    <NavbarBrand className='navbar_brand'><a href='/' id='navbar_logo'>YEHLO</a></NavbarBrand>

                    <span className='d-none d-md-block'>Get. Set. Sell.</span>

                    {searchVisible && <SearchBar modalOpen={()=>setModalOpen(!modalOpen)} />}

                    <NavbarToggler onClick={()=>setNavOpen(!navOpen)} />
                        <Collapse isOpen={navOpen} navbar>
                            <div className={searchVisible ? 'd-block d-md-none col-12' : 'col-12'}>
                                <Nav navbar className='float-md-right'>
                                    {/* <NavItem className='d-lg-none d-xl-none d-md-none d-sm-block mt-3 mt-lg-0'>
                                        <CollegeDropdown data={collegeList} open={collegeDropdownOpen} handleOpen={setDropdown}/>
                                    </NavItem> */}
                                    <NavItem>
                                        <NavLink href='/'> Home </NavLink>
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
                        </Collapse>
                    {/* <Nav navbar>
                        <NavItem className='d-none d-md-block' style={{width:'150px'}}> 
                            <Button variant='contained' component={Link} to='/getApp'><span className='fa fa-plus mr-1'></span> Add Listing </Button>
                        </NavItem>
                    </Nav>  */}
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

 
const SearchBar = (props) => {

    return(
        <div className='col-md-7 col-6 animate__animated animate__fadeInUp animate__faster'>
        <div className='row justify-content-center offset-md-3'>
            {/* <button className='search_button'>
                <i className='fa fa-search nav_search_icon' />
                <input className='nav_search_box' type='text' placeholder='Search..' />
            </button> */}
            <button className='search_button' onClick={props.modalOpen}>
                {/* <span className='d-none d-md-block search_text'>What are you looking for?</span> */}
                <span className='search_text_span p-lg-5 p-1'><i className='fa fa-search' /><span className='search_text'>Search</span></span>
            </button>
        </div>
        </div>
    );
}

export default Navigationbar;