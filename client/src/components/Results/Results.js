import React, {useContext} from 'react'
import { useTrail, animated,useTransition } from 'react-spring'
import './Results.css'
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
  })

const trail = useTrail(recipes.length, {
    to:{opacity:1},
    from: { opacity: 0},
  })


const renderRecipes = ()=>{
    return(    <React.Fragment>
                    <div className="Results--Header--title">
                    {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                        <animated.h1 className="Results__Title"key={key} style={rest} >
                            {MAP_CONSTANTS.supportedCountries[item]} Recipes
                        </animated.h1>
                    ))}
                    </div>  
                    <div className="Results--wrapper">
                                    {trail.map(({...rest},index) => 
                            <animated.div key={recipes[index].idMeal} className="Results__Card" style={rest}>
                                <h1  >{recipes[index].strMeal}</h1>
                                <img className="Results__Image"src={recipes[index].strMealThumb} alt={recipes[index].strMeal}/>
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

