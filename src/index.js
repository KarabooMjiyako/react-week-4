import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <App />
    <br/>
    <p>This project was coded by <a href="https://github.com/KarabooMjiyako/react-week-4">Karabo Mjiyako</a></p>
  </StrictMode>
);