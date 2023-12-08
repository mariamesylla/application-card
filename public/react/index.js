import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import {App} from './components/App';
import { HashRouter } from "react-router-dom";
import '../../public/style.css'
import { Navbar } from "./components/Navbar";
// import '../../public/style.css'

const root = createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <Navbar />
        <App />
    </HashRouter>
);