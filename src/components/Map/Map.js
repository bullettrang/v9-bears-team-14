import React, {  useState } from "react"
import ReactTooltip from "react-tooltip"
import JSONmap from '../../static/world-countries.json';
import MAP_CONSTANTS from './MapConstants/MAP_CONSTANTS';
import useRecipes from '../../hooks/useRecipes';
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


const Map =()=>{
  const [countrySelected,setCountry] = useState("");    

  const {supportedCountries} = MAP_CONSTANTS;
  const {supportedStyled,notSupportedStyled,selectedStyled}= MAP_CONSTANTS.styles;


  const getStyles =(countryName)=>{
    if(supportedCountries.hasOwnProperty(countryName) && countryName===countrySelected){
      return selectedStyled
    }
    else if(supportedCountries.hasOwnProperty(countryName)){
      return supportedStyled
    }
    else 
      return notSupportedStyled;
  }

  return (
    <div
      style={{
        position: "relative",
        height: 0,
        paddingBottom: "50%",
        marginBottom:"1rem"
      }}
    >
    <div className="Map__Wrapper">
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotation: [-11,0,0],
        }}
        width={980}
        height={551}
        // style={{
        //   width: "100%",
        //   height: "auto",
        // }}
        className="Composable__Map"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        >
        <ZoomableGroup center={[0,20]} disablePanning>
          <Geographies geography={JSONmap} disableOptimization={true}>
            {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
              <Geography
                name={geography.properties.name}
                key={i}
                geography={geography}
                projection={projection}
                data-tip={geography.properties.name}
                onClick={()=>setCountry(geography.properties.name)}
                style={getStyles(geography.properties.name)}
              ></Geography>
            ))}
          </Geographies>  
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip />
    </div>
  </div>
  )
}

  export default Map
  