import React from 'react';

const Country = (props) => {
    // console.log(props);
    const {name:{common}, population, region, flags:{png , svg}} = props.country;

    const flagStyle = {
        height: '50px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            
            <h4>This is a {common}</h4>
            <img style={flagStyle} src={png} alt="" />
            {/* <img style={{height: '50px'}} src={png} alt="" /> */}
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>



            {/* <h4>This is a {props.country.name.common}</h4>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p> */}

            {/* <h4>This is a {props.name}</h4> */}
        </div>
    );
};

export default Country;