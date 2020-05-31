import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

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
