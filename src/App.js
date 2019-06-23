import React, {useState} from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import CountryContext from './context/country-context'
import LoadingContext from './context/loading-context';
import LoadingModal from './components/LoadingModal/LoadingModal';

function App() {
  const [countrySelected, setSelectedCountry] = useState('')
  const [isLoading,setLoading] = useState(false);

  if(isLoading){
    document.body.style.overflow = 'hidden';            //this prevents scrolling when modal is open    https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
  }
  else{
    document.body.style.overflow = 'unset';             //allow scrolling on the document body again
  }
  return (
      <CountryContext.Provider value={ {countrySelected, setSelectedCountry}}>
        <LoadingContext.Provider value={{isLoading,setLoading}}>
        {isLoading?<LoadingModal/>:null}
          <div className="App">
            <Header/>
            <Map />
            <Results />
          </div>
        </LoadingContext.Provider>
      </CountryContext.Provider>
  );
}

export default App;
