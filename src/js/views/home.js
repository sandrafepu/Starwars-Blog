import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardsCharacters";
import { CardPlanet } from "../component/CardsPlanets";

export const Home = () => (
	<div className="mt-5">
        <h1><strong>Characters</strong></h1>
		<CardCharacter></CardCharacter>
		<div className="mt-5">
        <h1><strong>Planets</strong></h1>
		<CardPlanet></CardPlanet>
	</div>
	</div>
);
