import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Home = () => {
    const { companyData, guestData } = useContext(AppContext)

    const messagePlaceholder = {
        'firstName': null,
        'lastName': null,
        'roomNumber': null,
        'message': null,
    }

    const displayGuestCompany = (e) => {
        let company = document.getElementById('companies')
        let guest = document.getElementById('guests')

        console.log(company.value, guest.value)
    }

    return (
        <>
            <label for="guests">Choose a guest</label>
            <select name="guests" id="guests">
                {guestData.map((guest) => (
                    <option key={guest.id}>{guest.firstName} {guest.lastName}</option>
                ))}
            </select>
            <br></br>
            <label for="companies">Choose a company</label>
            <select name="companies" id="companies">
                {companyData.map((company) => (
                    <option key={company.id}>{company.company}</option>
                ))}
            </select>
            <button onClick={displayGuestCompany}>Generate Message</button>
        </>
    );

}

export default Home;