import "./Search.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f1221cb91879f165def91755994900fb";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&limit=5&units=metric&appid=${API_KEY}`,
    );
    const jsonResponse = await response.json();

    return {
      city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      seaLavel: jsonResponse.main.sea_level,
      visibility: jsonResponse.visibility,
      weather: jsonResponse.weather[0].description,
      windSpeed: jsonResponse.wind.speed,
    };
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="SearchForm">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          fullWidth
          sx={{
            width: { xs: "100%", sm: 420, md: 520 },
          }}
          value={city}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p className="SearchError">No such place exits!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
