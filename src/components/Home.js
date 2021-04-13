import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Home = () => {
    const { companyData, guestData } = useContext(AppContext)

    console.log(companyData, guestData)
    
    const messagePlaceholder = {
        'firstName': null,
        'lastName': null,
        'roomNumber': null,
        'message': null,
    }

    return (
        <h1>Hello Worlds</h1>
    );

}

export default Home;