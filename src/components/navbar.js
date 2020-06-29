import React, {useState, useEffect} from 'react';
import {Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Nav, NavLink} from 'reactstrap';
import SearchModal from './searchModal';
import { TextField, InputAdornment } from '@material-ui/core';

//icons
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Navigationbar = () => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSearchVisible(window.scrollY > 300);
            window.scrollY>100 ? document.getElementById('navbar').style.background = 'rgb(255,255,255)' : document.getElementById('navbar').style.background = 'transparent';
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
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' href='/about'>  About </NavLink>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' href='/contact'> Contact </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>
                </div>
                <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </Navbar>
            
        </>
     );
}
 
const SearchBar = (props) => {

    return(
        <div className='col-md-7 col-6 animate__animated animate__fadeInUp animate__faster'>
        <div className='row justify-content-center offset-md-3'>
            <button className='search_button' onClick={props.modalOpen}>
                <span className='search_text_span p-lg-5 p-1'>
                    <TextField InputProps={{startAdornment:(
                        <InputAdornment><SearchOutlinedIcon /></InputAdornment>
                    )}} size='small' placeholder='What are you looking for?' variant='outlined' />
                </span>
            </button>
        </div>
        </div>
    );
}

export default Navigationbar;