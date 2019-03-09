import React from "react";
import './StarWars.css'



    const Characters = (props) =>
    <div >
        <h4 className="charac">Name: {props.characters.name}</h4>
        <div className="charac-List">
         <p>Mass:{props.characters.mass}</p><p>Gender:{props.characters.gender}</p><p>Height:{props.characters.height}</p><p>Eye Color:{props.characters.eye_color}</p>
         <p>Hair Color:{props.characters.hair_color}</p>
        </div>
        
    </div>




export default Characters;