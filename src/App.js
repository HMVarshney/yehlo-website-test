import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Listing from './components/listings';
import About from './components/about';
import Footer from './components/footer';
import PGDetails from './components/pgDetails';
import Home from './pages/Home';
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
          <Redirect to='/' />
        </Switch>
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App;