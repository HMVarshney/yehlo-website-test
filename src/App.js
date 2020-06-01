import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Listing from './components/listings';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Route exact path='/listings' component={Listing} />
      </BrowserRouter>
      <img src={logo} />
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}

export default App;