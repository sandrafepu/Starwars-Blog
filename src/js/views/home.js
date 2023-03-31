import React, {useState, useEffect} from "react";
import "../../styles/home.css";
import { CharactersList } from "../component/CharactersList";

export const Home = () =>{ 

	const [listCharacters, setListCharacters] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
		.then((response) => response.json())
		.then((data) => {
			//console.log(data)
			setListCharacters(data);
		});
	}, []);

	return(
	<div className="mt-5">
        <h1><strong>Characters</strong></h1>
		<CharactersList charactersList={listCharacters.results}/>
	</div>
);
};