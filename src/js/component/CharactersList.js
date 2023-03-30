import React, { useState, useEffect} from "react";
import { CardCharacter } from "./CardsCharacters";

export const CharactersList = () => {

    const [list, setList] = useState ([]);
  
    const characterMap = props.CharactersList.map((taskName, taskIndex)=>{
      return <CardCharacter personName={personName} key={taskIndex} removeTask={props.removeTask} taskIndex={taskIndex}/>
  })

  return(
      <ul>
          {characterMap}
      </ul>
  )

}
    