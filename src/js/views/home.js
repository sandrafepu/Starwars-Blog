import React, {useState, useEffect} from "react";
import "../../styles/home.css";
import { PlanetsList } from "../component/PlanetsList";
import { CharactersList } from "../component/CharactersList";


export const Home = () =>{ 

	const [listCharacters, setListCharacters] = useState([]);
	const [listPlanets, setListPlanets] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
		.then((response) => response.json())
		.then((data) => {
			//console.log(data)
			setListCharacters(data);
		});
	}, []);

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
		.then((response) => response.json())
		.then((data) => {
			//console.log(data)
			setListPlanets(data);
		});
	}, []);

	return(
	<div className="mt-5">
        <h1><strong>Characters</strong></h1>
		<CharactersList charactersList={listCharacters.results}/>
		<h1><strong>Planets</strong></h1>
		<PlanetsList planetsList={listPlanets.results}/>
		
	</div>
);
};