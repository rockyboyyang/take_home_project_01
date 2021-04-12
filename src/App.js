import React, { useState } from 'react';

function App() {

  const [companyData, setCompanyData] = useState(require('./assets/data/Companies.json'))
  const [guestData, setGuestData] = useState(require('./assets/data/Guests.json'))
  
  return (
    <h1>Hello world!</h1>
  );
}

export default App;
