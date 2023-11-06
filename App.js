import React from 'react';
import nike from './nike.png';
import adidas from './ad.png';
import tnf from './the north face.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Turkáló</h1>
      </header>

      <body>
      <div class="container">

        <div class="card">
        <img src={nike} className="Nike" alt="logo" />
            <h2>Nike</h2><br></br>
            
            <br></br>
            <button><a href="nike.html">Vásárlás</a></button>
        </div>

        <div class="card">
        <img src={adidas} className="Adidas" alt="logo" />
            <h2>Adidas</h2><br></br>
            
            <br></br>
            <button><a href="adidas.html">Vásárlás</a></button>
        </div>

        <div class="card">
        <img src={tnf} className="tnf" alt="logo" />
            <h2>The North Face</h2><br></br>
            
            <br></br>
            <button> <a href="tnf.html">Vásárlás</a></button>
        
        </div>
    </div>

      </body>
    </div>
  );
}

export default App;


