import {useState,useEffect} from 'react';
import axios from 'axios';
import MAP_CONSTANTS from '../components/Map/MapConstants/MAP_CONSTANTS';

/**
 * @hook - useRecipes - takes in a country argument and returns fetched recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useRecipes= (country)=>{
    const [recipes,setRecipes]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(
         ()=>{
            const {supportedCountries}= MAP_CONSTANTS;          //Need to move into useEffect function to avoid ESLINT error https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies 
            const fetchRecipes = async ()=>{
                setIsError(false);
                setIsLoading(true);
                try{
                    if(supportedCountries.hasOwnProperty(country)){
                        const response = await axios.get(`/api/countries/${supportedCountries[country]}`);
                        setRecipes(response.data);
                    }
                }
                catch(error){
                    setIsError(true);
                }
                setIsLoading(false);
            };

            fetchRecipes();
        },
        [country]     
    );
    return [{recipes,isLoading,isError}];
}

export default useRecipes;