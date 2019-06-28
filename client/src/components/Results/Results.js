import React, {useContext} from 'react'

import { useTrail, animated,useTransition } from 'react-spring'
import './Results.css'
import useRecipes from '../../hooks/useRecipes';
import CountryContext from '../../context/country-context'
import MAP_CONSTANTS from '../Map/MapConstants/MAP_CONSTANTS'

const Results = (props) => {
const {countrySelected} = useContext(CountryContext)
let recipes=[];
 recipes = useRecipes(countrySelected)

 const transitions = useTransition(countrySelected, null, {
    from: { opacity: 0, height: 0, },
    enter: [
      { opacity: 1, height: 80, },
    ],
    leave: [  { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

const trail = useTrail(recipes.length, {
    to:{opacity:1},
    from: { opacity: 0},
  })


//   {trail.map(({ x, height, ...rest }, index) => (
//     <animated.div
//       key={items[index]}
//       className="trails-text"
//       style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
//       <animated.div style={{ height }}>{items[index]}</animated.div>
//     </animated.div>
//   ))}
return (
    <div >
        {/* {countrySelected.length > 0 &&<h1 className="Results__Title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>}          */}
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.h1 className="Results__Title"key={key} style={rest} >
            {MAP_CONSTANTS.supportedCountries[item]} Recipes
        </animated.h1>
      ))}
        <div className="Results__Wrapper">
            {trail.map(({...rest},index) => 
                <animated.div key={recipes[index].idMeal} className="Results__Card" style={rest}>
                    <h1  >{recipes[index].strMeal}</h1>
                    <img className="Results__Image"src={recipes[index].strMealThumb} alt={recipes[index].strMeal}/>
                </animated.div>
            )} 
        </div> 
    </div>
    )
}
export default Results;