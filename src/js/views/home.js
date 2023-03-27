import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardsCharacters";
import { CardPlanet } from "../component/CardsPlanets";

export const Home = () =>{ 

	const [character, setCharacter] = useState ([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/35/")
		.then((response) => response.json())
		.then((data) => {
			const card = document.querySelector('.card');
			const title = card.querySelector('#person-title');
			const gender = card.querySelector('#person-gender');
			const eye_color = card.querySelector('#person-eye_color');
			const hair_color = card.querySelector('#person-hair_color');
			title.textContent = data.name;
			gender.textContent = data.gender;
			eye_color.textContent = data.eye_color;
			hair_color.textContent = data.hair_color;
			console.log(data);
			setCharacter(data.name);
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