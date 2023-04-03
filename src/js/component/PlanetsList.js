import React from "react";
import { CardPlanet } from "./CardPlanet";

export const PlanetsList = (props) => {
    
    if(props.planetsList != undefined) {
        const planetsMap = props.planetsList.map((planet, index) => {
        
            return  <CardPlanet 
                index={index + 1}
                key={index}
                name={planet.name}
                population={planet.population}
                terrain={planet.terrain}
                />
        })

        return(
            <div>
                {planetsMap}
            </div>
        )
    }
    
}