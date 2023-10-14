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
      // .then(data => console.log(data))
      .then(data => {

        setCountries(data)
        // setCountries(data);
        // console.log(data);
        // const names = data.map(country => country.name.common);
        // console.log(names);
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
     const newCart = [...cart, country];
     setCart(newCart);
    }

  
  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart={cart}></Cart>

      {
          countries.map(country => <Country country={country} handleAddCountry = {handleAddCountry} key={country.cca2}></Country>)

        }
{/* 
      {
        countries.map(country => <Country name={country.name.common}></Country>)

      } */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
