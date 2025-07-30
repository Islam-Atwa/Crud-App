
import React from "react";
import App from "./App.jsx";
import './index.css';
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from "react-router";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(

    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
