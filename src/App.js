import React from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
