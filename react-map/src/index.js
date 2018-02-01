import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './App';*/
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import WorldMap from "./components/WorldMap"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<WorldMap />, document.getElementById("root"))
})
registerServiceWorker();
