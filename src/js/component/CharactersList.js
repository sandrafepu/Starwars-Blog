import React from "react";
import { CardCharacter } from "./CardCharacter";


export const CharactersList = (props) => {
    if(props.charactersList != undefined) {
        const charactersMap = props.charactersList.map((character, index) => {
            return  <CardCharacter 
                index={index + 1}
                key={index}
                name={character.name}
                gender={character.gender}
                hair_color={character.hair_color}
                eye_color={character.eye_color}
                />
        })

        return(
            <div>
                {charactersMap}
            </div>
        )
    }
}
