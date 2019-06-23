import React from 'react';
import Loader from 'react-loader-spinner'

import './LoadingModal.css';
const LoadingModal =()=>{

    return(
         <div className="LoadingModal__Container">
             <div className="LoadingModal__Content">
                <h1>Loading your Recipes</h1>
                <Loader type="ThreeDots" color="white" height={80} width={80} /> 
             </div>
        </div>
    )
}

export default LoadingModal;