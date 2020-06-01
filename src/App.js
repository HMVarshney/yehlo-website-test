import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Switch>
        <Route exact path='/listings' component={Listing} />
        <Route exact path='/about' component={About} />
      <Redirect to='/' />
      </Switch>
      </BrowserRouter>
      <img src={logo} />
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}

export default App;