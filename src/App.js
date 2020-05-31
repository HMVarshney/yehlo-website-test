import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import Navbar from './components/navbar';
import Header from './components/header';

function App() {

  return (
    <div style={{backgroundColor:'#D3D3D3'}}>
      <div>
        <Navbar />
      </div>
      <img src={logo} />
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}

export default App;
