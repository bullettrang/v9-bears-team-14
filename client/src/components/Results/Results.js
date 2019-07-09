import React, {useContext} from 'react'
import { useTrail, animated,useTransition } from 'react-spring'
import useRecipes from '../../hooks/useRecipes';
import CountryContext from '../../context/country-context'
import MAP_CONSTANTS from '../Map/MapConstants/MAP_CONSTANTS'
import LoadSpinner from '../LoadingSpinner/LoadSpinner';
import Recipe from '../Recipe/Recipe'
import "./_results.scss";

const Results = (props) => {
const {countrySelected} = useContext(CountryContext)
const [{recipes,isLoading,isError}] = useRecipes(countrySelected);

 const displayPreview =(id)=>{
    props.clickedModal(prevState=>!prevState)
    props.clickedPreview(id);
}

 const transitions = useTransition(countrySelected, null, {
    from: { opacity: 0, height: 0, },
    enter: [
      { opacity: 1, height: 80, },
    ],
    leave: [  { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  },[countrySelected])

const trail = useTrail(recipes.length, ({
    to:{opacity:1},
    from: { opacity: 0},
    onRest() {
        console.log('recipes:', recipes)
      }
  }),[recipes])


const renderRecipes = ()=>{
    return(    <React.Fragment>
                    <div className="Results--Header--title">
                    {transitions.length && transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                        <animated.h1 className="Results--title"key={key} style={rest} >
                            {MAP_CONSTANTS.supportedCountries[item]} Recipes
                        </animated.h1>
                    ))}
                    </div>  
                    <div className="Results--wrapper">
                                    {trail.map(({...rest},index) => 
                            <animated.div key={recipes[index].idMeal} className="Results--card" style={rest} onClick={()=>displayPreview(recipes[index].idMeal)}>
                                <img className="Results--image"src={recipes[index].strMealThumb} alt={recipes[index].strMeal} />
                                <div className="after"><h1  className="Results--card--title">{recipes[index].strMeal}</h1></div>
                            </animated.div>
                        )} 
                    </div>
                    <Recipe />
                </React.Fragment>    
            );
}
    return (
        <div className="Results--container">
            {isError && <div className="Results--error">Something went wrong ...</div>}
            {isLoading? <LoadSpinner color={"black"} message={"Loading your results"}/> : recipes.length?renderRecipes():null}
        </div>
    );
}

export default Results;

