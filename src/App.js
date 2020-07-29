import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

//Components
import Navbar from './components/navbar';
import Listing from  './components/Listings/listings';
import About from './components/about';
import Footer from './components/Footer';
import ProductDetails from './components/productDetails.js';
import Home from './components/Home.js';
import AppIcon from './components/AppIcon';
import GetApp from './components/GetTheApp';
import AdsListings from './components/Listings/adsListings';

//css
import styles from "./css/home.module.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/listings/:category' component={Listing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/productdetails/:category/:product_id' component={ProductDetails} />
          <Route exact path='/getApp' component={GetApp} />
          <Route exact path='/sponsored' component={AdsListings} />
          <Redirect to='/' />
      </Switch>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
      <Link to='/getApp'><AppIcon /></Link>
    </>
  )
}

export default App;