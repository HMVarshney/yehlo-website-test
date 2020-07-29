import React, { useState, useEffect } from 'react';
import SearchModal from './Search/searchModal';
import { TextField, InputAdornment, Typography, makeStyles, Button } from '@material-ui/core';
import { Navbar, Nav, NavItem } from 'reactstrap';

//icons
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';

const Navigationbar = () => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSearchVisible(window.scrollY > 500);
            window.scrollY > 50 ? document.getElementById('navbar').style.background = 'rgba(0,0,0,0.5)' : document.getElementById('navbar').style.background = 'rgba(0,0,0,0.3)';
        }

        window.addEventListener("scroll", onScroll);;    
    });

    return ( 
        <>
            {/* <Navbar id='navbar' className='headerbar' light expand='md' fixed='top'>
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
            </Navbar> */}
            
              <Navbar style={{background:'rgba(0,0,0,0.3)'}} id='navbar' sticky='top' dark>
                <div className='container'>
                    <Link to='/'><img width='50px' src='/assets/images/logo_no_name1.png' alt='logo' /></Link>
                    {searchVisible && <SearchBar modalOpen={()=>setModalOpen(!modalOpen)} />}
                    <Nav navbar>
                        <NavItem>
                            <Link to='/about'>
                                <i style={{color:'white'}} className='fa fa-info mr-2'></i>
                                <Typography style={{color:'white'}} className='d-none d-lg-inline' component='h6'>About</Typography>
                            </Link>
                        </NavItem>
                    </Nav>
                </div> 
            </Navbar>
            <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
     );
}
 
const SearchBar = (props) => {

    const textfield = textfieldStyles();

    return(
        <>
            <div className='animate__animated animate__fadeInUp animate__faster'>
                <Button onClick={()=>props.modalOpen(true)}>
                <TextField  disabled classes={{root: textfield.root}} InputProps={{startAdornment:(
                    <InputAdornment><SearchOutlinedIcon /></InputAdornment>
                        )}} size='small' placeholder='What are you looking for?' variant='outlined' />
                </Button>
            </div>
        </>
    );
}

export default Navigationbar;

const textfieldStyles = makeStyles({
    root:{
        borderRadius:'5px',
        background:'white',
    }
});