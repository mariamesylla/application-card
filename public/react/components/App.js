import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { Routes, Route } from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { Items } from '../components/ItemsContainer'

export const App = () => {
	const [sauces, setSauces] = useState([]);
	async function fetchSauces() {
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();

			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		fetchSauces();
	}, []);

	return (
		<Routes>
			<Route exact path="/items" element={<Items />} />
			<Route exact path="/" element={<SaucesList sauces={sauces} />} />
		</Routes>
	)
}