import React, {useState} from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import './App.css';
import CountryContext from './context/country-context'


function App() {
  const [countrySelected, setSelectedCountry] = useState('')
  return (
    <CountryContext.Provider value={ {countrySelected, setSelectedCountry}} >
    <div className="App">
      <div className="Container">
        <Header/>
        <section className="Map__Container">
          <Map/>
        </section>
        <section className="Results__Container">
          <Results countryName={'Canadian'}/>
        </section>
      </div>
    </div>
    </CountryContext.Provider>     
  );
}

export default App;
