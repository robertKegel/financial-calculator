import { useState } from 'react';

import NavBar from "../NavBar/NavBar";
import SimpleLoan from "../SimpleLoan/SimpleLoan";
import PresentValue from "../PresentValue/PresentValue";


function App() {

  const [main, setMain] = useState('SimpleLoan');

  const setMainComponent = (component) => {
    setMain(component);
  }

  const mainComponent = {
    'SimpleLoan': <SimpleLoan />,
    'PresentValue': <PresentValue />
  }



  return (
    <div>
      <NavBar setMainComponent={setMainComponent} />
      
      {mainComponent[main]}
      
    </div>
  );
}

export default App;
