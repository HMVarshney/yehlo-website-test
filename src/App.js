import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//Components
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/Footer';
import ProductDetails from './components/productDetails.js';
import Home from './components/Home.js';
import AppIcon from './components/AppIcon';
import GetApp from './components/GetTheApp';
import SponseredListings from './components/sponsoredListings';

//context
import MainContextProvider from './context/context-provider/mainContext';

//css
import styles from "./css/home.module.css";

function App() {
  return (
    <div>
      <MainContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/listings/:category' component={Listing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/productdetails/:category/:product_id' component={ProductDetails} />
              <Route exact path='/getApp' component={GetApp} />
              <Route exact path='/sponslistings' component={SponseredListings} />
              <Redirect to='/' />
          </Switch>
          <footer className={styles.footer}>
            <Footer/>
          </footer>
          <a href='/getApp'><AppIcon /></a>
        </BrowserRouter>
        </MainContextProvider>
    </div>
  )
}

export default App;