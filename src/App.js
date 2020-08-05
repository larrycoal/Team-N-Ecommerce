import React from 'react';
import Home from './Components/Home'
import './Resources/Stylesheet.css'
import Featured from './Components/Featured'
import Store from './Components/Store'

const App=()=> {
  return (
    <div>
      <Home>
        <Featured/>
        <Store/>
      </Home>
    </div>
  );
}

export default App;
