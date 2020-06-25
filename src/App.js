import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//Components
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/Footer';
import PGDetails from './components/pgDetails.js';
import Home from './components/Home.js';
import AppIcon from './components/AppIcon';
import GetApp from './components/GetTheApp';

//context
import HomepageContextProvider from './context/context-provider/homepageContext';

//css
import styles from "./css/home.module.css";
import SponseredListings from './components/sponsoredListings';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <HomepageContextProvider>
                <Home/>
              </HomepageContextProvider>
            </Route>
            <Route exact path='/listings' component={Listing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pgdetails/:product_id' component={PGDetails} />
            <Route exact path='/getApp' component={GetApp} />
            <Route exact path='/sponslistings' component={SponseredListings} />
            <Redirect to='/' />
          </Switch>
          <footer className={styles.footer}>
            <Footer/>
          </footer>
          <a href='/getApp'><AppIcon /></a>
        </BrowserRouter>
    </div>
  )
}

export default App;