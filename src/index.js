
import React from "react";
import App from "./App.jsx";
import './index.css';
import ReactDOM from "react-dom/client";


import { BrowserRouter } from "react-router";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
