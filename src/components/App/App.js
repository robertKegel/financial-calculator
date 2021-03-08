import React, {Component, useEffect, useState} from 'react';

import NavBar from "../NavBar/NavBar";
import SimpleLoan from "../SimpleLoan/SimpleLoan";


function App() {

  const [main, setMain] = useState('SimpleLoan');

  const setMainComponent = (component) => {
    setMain(component);
  }

  const mainComponent = {
    'SimpleLoan': <SimpleLoan />
  }



  return (
    <div>
      <NavBar setMainComponent={setMainComponent} />
      
      {mainComponent[main]}
      
    </div>
  );
}

export default App;
