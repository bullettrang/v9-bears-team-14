import React from 'react'
import './Results.css'
import meals from "../../tests/meals"

const Results = (props) => 
            <div >
                <h1 className="Results__Title">{props.countryName} Recipes</h1>
                <div className="Results__Wrapper">
                {meals.map((meal) => 
                    <div className="Results__Card">
                        <div className="Title__Wrapper">
                            <h1 className="Title--Heading" key={meal.idMeal}>{meal.menuTitle}</h1>
                        </div>
                        <figure className="Results__Image--item">
                            <img className="Results__Image"src={meal.menuTitleThumb} alt={meal.menuTitle}/>
                        </figure>
                    </div>
                )} 
            </div> 
    </div>

export default Results;