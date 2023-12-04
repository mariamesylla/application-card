import React, { useState, useEffect } from 'react';
import { Sauce } from './Sauce';
import apiURL from '../api';

export const SaucesList = () => {
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
		<div>
			{sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})}
		</div>
	)
} 
