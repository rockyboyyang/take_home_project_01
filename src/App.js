import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Home from './components/Home';


const App = () => {

  const [companyData, setCompanyData] = useState(require('./assets/data/Companies.json'))
  const [guestData, setGuestData] = useState(require('./assets/data/Guests.json'))

  return (
    <BrowserRouter>
      <AppContext.Provider value={{companyData, guestData}}>
        <Home />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
