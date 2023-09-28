import React from "react";
import {createRoot} from 'react-dom/client';
import reactDom from "react-dom";
import App from "./src/App";

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<App/>);