import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams()

    const [country, setCountry] = useState([])
    useEffect(() => {
        const url =`https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then( data => setCountry(data[0]))
    }, [countryName])
    console.log(country)
   
    return (
        <div>
            <p>{countryName}</p>
            <h1> {country.name}</h1>
            <p>{country.capital}</p>
        </div>
    );
};

export default CountryDetails;