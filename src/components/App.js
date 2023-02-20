import { CountriesList } from "./CountriesList";
import { Navbar } from "./Navbar";
import countriesList from '../countries.json'
import { useEffect, useState } from "react";
import { CountryDetails } from "./CountryDetails";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [countriesListState, setCountriesListState] = useState()
  useEffect(() => setTimeout(() => setCountriesListState(countriesList), 0), [])

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          { countriesListState ? <CountriesList countriesList={ countriesListState } ></CountriesList> : <i>Cargando</i> }
          <Routes>
            <Route path="/country/:reference" element={<CountryDetails countriesList={ countriesListState } /> } ></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
