import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// import and prepend the api url to any fetch calls
import { Items } from '../components/ItemsContainer'
import { ItemContainer } from '../components/Item';
import { SaucesList } from './SaucesList';
import { Home } from './Home'

export const App = () => {

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/items" element={<Items />} />
			<Route exact path="/items/:id" element={<ItemContainer />} />
			<Route exact path="/sauces" element={<SaucesList />} />
		</Routes>
	)
}