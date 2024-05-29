import React from 'react';

const Country = (props) => {
    // console.log(props.name);
    // console.log(props.country);

    const {population, region, name:{common}, flags: {png, svg}} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle ={
        border: "1px solid red",
        margin: '10px',
        padding: '10px'
    }
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            {/* <h4>This is a {props.name}</h4> */}

            {/* <h4>This is a {props.country.name.common}</h4>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p> */}

            <h4>This is a {common}</h4>
            {/* <img style={{height: '50px'}} src={svg} alt="" /> */}
            <img style={flagStyle} src={svg} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>            
        </div>
    );
};

export default Country;