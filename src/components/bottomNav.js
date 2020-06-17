import React, { useEffect, useState } from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { Button, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

//icons
import TextsmsTwoToneIcon from '@material-ui/icons/TextsmsTwoTone';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const BottomNav = () => {
    const [display, setDisplay] = useState(false);
    useEffect(()=>{
        const onScroll = () => {
            setDisplay(window.innerWidth > 768 ? window.scrollY > 500 : window.scrollY > 600);
        }
        window.addEventListener('scroll', onScroll);
    });

    const NavButton = withStyles(() => ({
        root: {
          borderRadius: '50%',
        },
      }))(Button);

    if(display){
    return ( 
        <>
        <Navbar fixed='bottom'>
            <div className='container col-lg-3 col-12 justify-content-center animate__animated animate__fadeInUp' >
                <Nav className='bottom_nav'>
                    <NavItem className='bottom_nav_button'>
                        <NavLink to='/getApp'><Button  variant='contained' color='secondary'><FavoriteOutlinedIcon /></Button></NavLink>
                    </NavItem>
                    <NavItem className='bottom_nav_button'>
                        <NavLink to='/getApp'><Button variant='contained' color='primary'><TextsmsTwoToneIcon /></Button></NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
        </>
     );} else{
         return null;
     }
}
 
export default BottomNav;