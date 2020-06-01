import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/footer'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
        <BrowserRouter>
        <Switch>
          <Route exact path='/listings' component={Listing} />
          <Route exact path='/about' component={About} />
        <Redirect to='/listings' />
        </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;