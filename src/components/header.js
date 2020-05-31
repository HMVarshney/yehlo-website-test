import React, { useState, useEffect } from 'react';
import {Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Nav, NavLink, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
const Header = (props) => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [navOpen, setNavOpen] = useState(true);

    const startScroll = window.scrollY;
    useEffect(() => {
        const onScroll = () => {
            setSearchVisible(window.scrollY > startScroll);
            // setScroll(window.scrollY)
        }
        window.addEventListener("scroll", onScroll);;    
      });

    return (    
        <header className="header_area header_v2 transparent_header">
        <div className="container" style={{backgroundColor:'#D3D3D3'}}>
            <div>
                <div className="row align-items-center">
                    <div className="col-lg-3">
                    <NavbarToggler onClick={()=>setNavOpen(!navOpen)}/>
                        <div className="listghor_logo">
                            <a href="home_1.html"><img src="assets/images/logo_2.png" className="img-fluid cl_logo" alt=""/></a>
                            <a href="home_1.html"><img src="assets/images/logo.png" className="img-fluid wh_logo" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-5 col-lg-7">
                        <div className="listghor_menu">
                        <Collapse isOpen={navOpen}>
                            <nav className="main_menu">
                                <ul>
                                    <li className="menu-item"><a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="home_1.html">Home 01</a></li>
                                            <li className="menu-item"><a href="home_2.html">Home 02</a></li>
                                            <li className="menu-item"><a href="home_3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="#">listing</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="listing_list.html">listing_list</a></li>
                                            <li className="menu-item"><a href="listing_list_sidebar.html">listing list sidebar</a></li>
                                            <li className="menu-item"><a href="listing_grid.html">listing grid</a></li>
                                            <li className="menu-item"><a href="listing_grid_sidebar.html">listing grid sidebar</a></li>
                                            <li className="menu-item"><a href="listing_details.html">listing details 01</a></li>
                                            <li className="menu-item"><a href="listing_details_2.html">listing details 02</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="#">pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="about.html">About us</a></li>
                                            <li className="menu-item"><a href="add_listing.html">Add listing</a></li>
                                            <li className="menu-item"><a href="team.html">our team</a></li>
                                            <li className="menu-item"><a href="pricing.html">pricing</a></li>
                                            <li className="menu-item"><a href="faq.html">faq</a></li>
                                            <li className="menu-item"><a href="404.html">404</a></li>
                                            <li className="menu-item"><a href="login.html">login</a></li>
                                            <li className="menu-item"><a href="registration.html">registration</a></li>
                                            <li className="menu-item"><a href="search.html">search</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="blog_list_left_sidebar.html">blog list left sidebar</a></li>
                                            <li className="menu-item"><a href="blog_list_right_sidebar.html">blog list right sidebar</a></li>
                                            <li className="menu-item"><a href="blog_grid.html">blog grid</a></li>
                                            <li className="menu-item"><a href="blog_grid_left_sidebar.html">blog grid left sidebar</a></li>
                                            <li className="menu-item"><a href="blog_grid_right_sidebar.html">blog grid right sidebar</a></li>
                                            <li className="menu-item"><a href="blog_details.html">blog details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            </Collapse>
                        </div>
                    </div>
                    {/* {searchVisible ? null : 
                    <div className="col-lg-2">
                        <div className="menu_button">
                            <a href="add_listing.html" className="listghor_btn"><i className="fas fa-plus"></i>add Listing</a>
                        </div>
                    </div> } */}
                </div>
            </div>

            {/* <div className="mobile_menu">
                <div className="row align-items-center">
                    <div className="col-md-4 col-6">
                        <div className="mobile_menu_logo">
                            <a href="home_1.html" className="logo"><img src="assets/images/logo.png" className="img-fluid" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-md-8 col-6">
                        <div className="mobile_menu_icon">
                            <a href="#" className="menu_icon"><i className="fas fa-bars"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sidenav_menu">
                    <div className="times_icon">
                        <a href="#" className="menu_icon"><i className="fas fa-times"></i></a>
                    </div>
                    <div className="brand_logo text-center">
                        <a href="home_1.html" className="logo"><img src="assets/images/logo.png" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="sidebar_search">
                        <input type="text" placeholder="search here" />
                    </div>
                    <ul className="sidebar-menu">
                        <li><a href="#">home<i className="fas fa-angle-down float-right"></i></a>
                            <ul className="sidebar-submenu">
                                <li><a href="home_1.html">home 01</a></li>
                                <li><a href="home_2.html">home 02</a></li>
                                <li><a href="home_3.html">home 03</a></li>
                            </ul>
                        </li>
                        <li><a href="#">listing<i className="fas fa-angle-down float-right"></i></a>
                            <ul className="sidebar-submenu">
                                <li><a href="listing_list.html">listing_list</a></li>
                                <li><a href="listing_list_sidebar.html">listing list sidebar</a></li>
                                <li><a href="listing_grid.html">listing grid</a></li>
                                <li><a href="listing_grid_sidebar.html">listing grid sidebar</a></li>
                                <li><a href="listing_details.html">listing details 01</a></li>
                                <li><a href="listing_details_2.html">listing details 02</a></li>
                            </ul>
                        </li>
                        <li><a href="#">pages<i className="fas fa-angle-down float-right"></i></a>
                            <ul className="sidebar-submenu">
                                <li><a href="about.html">About us</a></li>
                                <li><a href="add_listing.html">add listing</a></li>
                                <li><a href="team.html">our team</a></li>
                                <li><a href="pricing.html">pricing</a></li>
                                <li><a href="faq.html">faq</a></li>
                                <li><a href="404.html">404</a></li>
                                <li><a href="login.html">login</a></li>
                                <li><a href="registration.html">registration</a></li>
                                <li><a href="search.html">search</a></li>
                            </ul>
                        </li>
                            <li><a href="#">blog<i className="fas fa-angle-down float-right"></i></a>
                                <ul className="sidebar-submenu">
                                    <li><a href="blog_list_left_sidebar.html">blog list left sidebar</a></li>
                                    <li><a href="blog_list_right_sidebar.html">blog list right sidebar</a></li>
                                    <li><a href="blog_grid.html">blog grid</a></li>
                                    <li><a href="blog_grid_left_sidebar.html">blog grid left sidebar</a></li>
                                    <li><a href="blog_grid_right_sidebar.html">blog grid right sidebar</a></li>
                                    <li><a href="blog_details.html">blog details</a></li>
                                </ul>
                            </li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    </header>
    ); 
}
 



export default Header;