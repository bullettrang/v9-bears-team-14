import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import LoadingContext from '../context/loading-context'
import MAP_CONSTANTS from '../components/Map/MapConstants/MAP_CONSTANTS';


/**
 * @hook - useRecipes - takes in a country argument and returns recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useRecipes= (country)=>{
    const [recipes,setRecipes]= useState([]);
    const {setLoading} = useContext(LoadingContext);
    
    useEffect(
        
         ()=>{
            const {supportedCountries}= MAP_CONSTANTS;          //Need to move into useEffect function to avoid ESLINT error https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies 

            ( async country =>{
                setLoading(true);
                //document.body.style.overflow = 'hidden';            //this prevents scrolling when modal is open    https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
                if(supportedCountries.hasOwnProperty(country)){
                    const response = await axios.get(`/api/countries/${supportedCountries[country]}`);
                    setRecipes(response.data);
                }
                setLoading(false);
                
                return;
            })(country);
        },
        [country,setLoading]     
    );
    return recipes;
}

export default useRecipes;