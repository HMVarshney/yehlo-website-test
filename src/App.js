import React from 'react';
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/footer';
import PGDetails from './components/pgDetails.js';
import Home from './components/Home.js';
import GetApp from './components/getApp';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import BottomNav from './components/bottomNav';
import AppIcon from './components/AppIcon';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/listings' component={Listing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pgdetails/:product_id' component={PGDetails} />
            <Route exact path='/getApp' component={GetApp} />
            <Redirect to='/' />
          </Switch>
          <AppIcon />
        </BrowserRouter>
    </div>
  )
}

export default App;