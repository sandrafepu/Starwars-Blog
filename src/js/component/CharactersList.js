import React, { useState, useEffect} from "react";

export const CharactersList = () => {

    const [list, setList] = useState ([]);
  
    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
          .then((response) => response.json())
          .then((data) => {
            setList(data.results);
          });
      }, []);
    
      /*return (
        <div className="character-list">
          {characters.map((character) => (
            <CardsCharacters
              key={character.url}
              name={character.name}
              hairColor={character.hair_color}
              eyeColor={character.eye_color}
              gender={character.gender}
            />
          ))}
        </div>
      );*/
    };