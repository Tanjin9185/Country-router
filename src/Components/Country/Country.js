import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';



const Country = (props) => {
    const {name,capital, region,alpha3Code} = props.country;
    const countryStyle = {
        border: '1px solid gold',
        marginBottom: '35px',
        padding : '35px 0',
        borderRadius: '35px',
        textAlign: 'center'
    }
    // let history = useHistory();
    
    // const handleCountry = (countryName) => {
    //     history.push(`/country/${countryName}`);
    // }
    return (
        <div style={countryStyle}>
            <h3>{name}</h3>
            <p>{capital}</p>
            <p>{region}</p>
            {/* <button onClick={() => handleCountry(countryName)}>More Information</button> */}
            <p>id <Link to={`/country/${name}`}>ok</Link></p>
        </div>
    );
};

export default Country;