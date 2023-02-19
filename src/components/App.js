import { CountriesList } from "./CountriesList";
import { Navbar } from "./Navbar";
import countriesList from '../countries.json'
import { useEffect, useState } from "react";

function App() {
  const [countriesListState, setCountriesListState] = useState()
  useEffect(() => setTimeout(() => setCountriesListState(countriesList), 0), [])
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          { countriesListState ? <CountriesList countriesList={ countriesListState } ></CountriesList> : <i>Cargando</i>}
        </div>
      </div>
    </>
  )
}

export default App;
