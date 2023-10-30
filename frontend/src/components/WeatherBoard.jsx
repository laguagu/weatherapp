/* eslint-disable react/prop-types */
import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { sharedPaperStyle } from "../theme";
import { useEffect, useState } from "react";
import fetchWeather from "../api/weatherApi";
import UserDetails from "./userDetails.jsx";
import humidyImage from "../images/hum.png";
import windImage from "../images/wind.png";
import pressureImage from "../images/press.png";

function SearchWeather({ setWeatherCity }) {
  const [city, setCity] = useState("");

  function onSubmit() {
    setWeatherCity(city);
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <TextField
        id="cityname"
        autoComplete="address-level2" // Kaupungit autofill
        variant="filled"
        label="Enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 1 }}
        onClick={onSubmit}
      >
        Search
      </Button>
    </Box>
  );
}

function WeatherGrids() {
  const [weatherCity, setWeatherCity] = useState("Helsinki");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherTemp, setWeatherTemp] = useState({
    celsius: "",
    feels_like: "",
  });
  const [weatherInfo, setWeatherInfo] = useState("");
  const [weatherWind, setWeatherWind] = useState("");
  const [weatherhumidity, setWeatherhumidity] = useState("");
  const [weatherPressure, setWeatherPressure] = useState("");
  // Ugly but it works :)
  useEffect(() => {
    async function getWeather() {
      try {
        const result = await fetchWeather(weatherCity);
        const icon = result.weather[0].icon;
        const temp = result.main.temp;
        const city = result.name;
        const info = result.weather[0].main;
        const wind = result.wind.speed;
        const humidity = result.main.humidity;
        const pressure = result.main.pressure;
        setWeatherCity(city);
        setWeatherIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);
        setWeatherTemp({ celsius: temp, feels_like: result.main.feels_like });
        setWeatherInfo(info);
        setWeatherWind(wind);
        setWeatherhumidity(humidity);
        setWeatherPressure(pressure);
      } catch (error) {
        console.error("Search error", error.message);
        setWeatherCity("Not found");
      }
    }
    getWeather();
  }, [weatherCity]);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {/* Otsikko teksti ylälaatikon päällä*/}
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="primary">
            Weather Search
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100px" }}
        >
          <SearchWeather setWeatherCity={setWeatherCity} />
        </Grid>

        {/* Ylälaatikko */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Current weather
          </Typography>
          <Paper elevation={3} sx={sharedPaperStyle}>
            {/* Lisää Laatikoita ylälaatikon sisällä */}
            <Grid container spacing={50}>
              <Grid item xs={6}>
                <Typography variant="h2" color="primary">
                  {weatherCity}
                </Typography>
                <Typography
                  color="secondary"
                  variant="h5"
                  sx={{ marginTop: "15px" }}
                >
                  Temperature
                  {weatherTemp.celsius > 0 ? " +" : " "}
                  {weatherTemp.celsius + "°C"}
                  <Typography>
                    Feels Like {weatherTemp.feels_like + "°C"}
                  </Typography>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  color="primary"
                  variant="h4"
                  sx={{ marginTop: "15px" }}
                >
                  {weatherInfo}
                </Typography>
                <img src={weatherIcon} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Vasen alalaatikko */}
        <Grid item xs={6}>
          <Typography variant="h4" color="primary">
            Weather info
          </Typography>
          <Paper elevation={3} sx={sharedPaperStyle}>
            {/* Container kolmelle pienelle laatikolle */}

            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    Humidity
                    <img src={humidyImage} />
                  </Typography>
                  <Divider />
                  <Typography color="primary" align="center">
                    {weatherhumidity + " %"}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    Wind
                    <img src={windImage} />
                  </Typography>
                  <Divider />
                  <Typography color="primary" align="center">
                    {weatherWind + " m/s"}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    Pressure
                    <img src={pressureImage} />
                  </Typography>
                  <Divider />
                  <Typography color="primary" align="center">
                    {weatherPressure + " hPa"}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Oikea alalaatikko */}
        <UserDetails />
      </Grid>
    </Container>
  );
}

export default WeatherGrids;
