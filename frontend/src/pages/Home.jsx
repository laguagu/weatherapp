import fetchWeather from "../api/fetchWeather";
import WeatherGrids from "../components/WeatherGrids";

function WeatherApp() {
  fetchWeather("Helsinki")
  return (
    <WeatherGrids/>
  );
}

export default WeatherApp;
