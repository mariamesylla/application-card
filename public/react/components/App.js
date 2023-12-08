import React  from "react";
import { Routes, Route } from "react-router-dom";

// import and prepend the api url to any fetch calls
import { Items } from "../components/ItemsContainer";
import { ItemContainer } from "../components/Item";
import { SaucesList } from "./SaucesList";
import { Home } from "./Home";
import { CreateItem } from "./CreateItem";
import { UpdateItem } from "./UpdateItem";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ItemContainer />} />
        <Route path="/sauces" element={<SaucesList />} />
        <Route path="/createItem" element={<CreateItem />} />
        <Route path="/updateItem/:id" element={<UpdateItem />} />
      </Routes>
  );
};
