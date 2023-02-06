import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  // let [cityName, setCityName] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setCityName(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature:<strong> {temperature}°C</strong>
          </li>
          <li>
            Description:<strong> {description}</strong>
          </li>
          <li>
            Humidity:<strong> {humidity}%</strong>
          </li>
          <li>
            Wind speed:<strong> {wind}km/h</strong>
          </li>
          <li>
            <img src={icon} width="70" alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
