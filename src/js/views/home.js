import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacter";

export const Home = () => (
	<div className="mt-5">
        <h1><strong>Characters List</strong></h1>
		<CardCharacter></CardCharacter>
		 
	</div>
);
