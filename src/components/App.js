import { CountriesList } from "./CountriesList";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { CountryDetails } from "./CountryDetails";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [countriesListState, setCountriesListState] = useState()

  const getDataFromApi = async () => {
    const response = await (await fetch('https://restcountries.com/v3.1/all')).json()
    setCountriesListState(response)
  }
  useEffect(() => getDataFromApi(), [])
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          { countriesListState ? <CountriesList countriesList={ countriesListState } ></CountriesList> : <i>Cargando</i> }
          <Routes>
            <Route path="/country/:reference" element={ <CountryDetails countriesList={ countriesListState } /> } ></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
