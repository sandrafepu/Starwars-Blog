import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardsCharacters";
import { CardPlanet } from "../component/CardsPlanets";
import { CharactersList } from "../component/CharactersList";

export const Home = () =>{ 

	const [character, setCharacter] = useState ([]);
	const [planet, setPlanet] = useState ([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
		.then((response) => response.json())
		.then((data) => {
		
			console.log(data);
			setCharacter(data.name);
			});
	}, []);

	
	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
		.then((response) => response.json())
		.then((data) => {
		
			console.log(data);
			setPlanet(data.name);
			});
	}, []);


	return(
	<div className="mt-5">
        <h1><strong>Characters</strong></h1>
		<CardCharacter></CardCharacter>
		<div className="mt-5">
        <h1><strong>Planets</strong></h1>
		<CardPlanet></CardPlanet>
	</div>
	</div>
);
};