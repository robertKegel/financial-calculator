import { useState } from 'react';

import NavBar from "../NavBar/NavBar";
import SimpleLoan from "../SimpleLoan/SimpleLoan";
import LoanAmount from "../LoanAmount/LoanAmount";
import PresentValue from "../PresentValue/PresentValue";
import FutureValue from "../FutureValue/FutureValue";


function App() {

  const [main, setMain] = useState('SimpleLoan');

  const setMainComponent = (component) => {
    setMain(component);
  }

  const mainComponent = {
    'SimpleLoan': <SimpleLoan />,
    'LoanAmount': <LoanAmount />,
    'PresentValue': <PresentValue />,
    'FutureValue': <FutureValue />
  }



  return (
    <div>
      <NavBar setMainComponent={setMainComponent} />
      
      {mainComponent[main]}
      
    </div>
  );
}

export default App;
