import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/footer';
import PGDetails from './components/pgDetails.js';
import Home from './components/Template.js';
import GetApp from './components/getApp';
import AppBadge from './components/footerBadge';
import Test from './components/addListing';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/listings' component={Listing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/details' component={PGDetails} />
          <Route exact path='/getApp' component={GetApp} />
          <Route exact path='/test' component={Test} />
          <Redirect to='/' />
        </Switch>
        <AppBadge />
        </BrowserRouter>
    </div>
  )
}

export default App;