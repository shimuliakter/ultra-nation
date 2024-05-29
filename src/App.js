import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        // console.log(data)
        // const names = data.map(country => country.name.common);
        // console.log(names);
      })
      .catch(error => console.log(error))
  }, [])


  const handleAddCountry = (country) => {
    // console.log('country added', country)
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h4>Country added: {cart.length}</h4>

      <Cart cart={cart}></Cart>

      {/* <ul>
        {
          countries.map(country => <li>{country.name.common}</li>)
        }
      </ul> */}

      {/* {
        countries.map(country => <Country name={country.name.common}></Country>)
      } */}



      {
        countries.map(country => <Country country={country} key={country.cca2} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
  );
}


export default App;
