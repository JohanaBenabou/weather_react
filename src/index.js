import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>
        <h2>
          <a href="https://github.com/JohanaBenabou/weather_react">
            Link Github
          </a>
        </h2>

        <Weather temperature={12} />
      </div>
    </div>
  </StrictMode>
);
