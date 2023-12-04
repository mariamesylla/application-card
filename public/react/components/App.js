import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { Items } from '../components/ItemsContainer'

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([])

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const fetchItems = async()=>{
		try {
			const res = await fetch(`${apiURL}/items`)
			const data = await res.json()
			setItems(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchSauces();
		fetchItems()
	}, []);

	return (
		<main>	
			<div>
				<h1>Items Available</h1>
				{items.map((item) => {
					return <Items key={item.id} items={item} />
				})}
			</div>
			<h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} />
		</main>
	)
}