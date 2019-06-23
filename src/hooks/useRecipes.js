import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import RecipesContext from '../context/recipes-context'
import MAP_CONSTANTS from '../components/Map/MapConstants/MAP_CONSTANTS';


/**
 * @hook - useRecipes - takes in a country argument and returns recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useRecipes= (country)=>{
    const [recipes,setRecipes]= useState([]);
    const {setLoading} = useContext(RecipesContext);
    
    useEffect(
        
         ()=>{
            const {supportedCountries}= MAP_CONSTANTS;          //Need to move into useEffect function to avoid ESLINT error https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies 
            ( async country =>{
                if(supportedCountries.hasOwnProperty(country)){
                    setLoading(true);
                    const response = await axios.get(`/api/countries/${supportedCountries[country]}`);
                    setRecipes(response.data);
                    setLoading(false);
                }
                setLoading(true);       
                return;
            })(country);
        },
        [country,setLoading]      //empty [] means it works like componentDidMount
    );
    return recipes;
}

export default useRecipes;