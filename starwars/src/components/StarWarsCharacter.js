import React from "react";
import './StarWars.css'



    const Characters = (props) =>
    <div >
        <h4 className="charac">Name: {props.characters.name}</h4>
        <div classNameclassName="charac-List">
         <p>Mass:{props.characters.mass}Gender:{props.characters.gender}Height:{props.characters.height}Eye Color:{props.characters.eye_color}</p>
        
        </div>
        
    </div>




export default Characters;