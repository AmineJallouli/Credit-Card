import React from 'react';
import './App.css';
import sim from './sim.png'
import logo from './logo.jpg'

function App() {
  return (
    <div className="App">
      <h2>Credit Card</h2>
      <img className="sim" src={sim}/>
      <img className="logo" src={logo}/>
      <div>
        <div>
          <h3>7253 3256 7895 1245</h3>
        </div>
        <div className="month">
          <h2 className="nbr">5422</h2>
          <div className='valid'>
            <span className="v">VALID</span>
            <span className="v">THRU</span>
          </div>
          <i class="fas fa-caret-right"></i>
          <div>
          <p>MONTH/YEAR</p>
          <span className="date">11/15</span>
          </div>
        </div>
        <div>
          <h4>CARDHOLDER</h4>
        </div>
      </div>  
    </div>
  );
}

export default App;
