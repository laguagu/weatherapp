import { Container, Grid, Paper, Typography, Divider } from "@mui/material";
import { sharedPaperStyle } from "../theme";
import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";
import AirIcon from "@mui/icons-material/Air";

function WeatherGrids() {
  const [weatherCity, setWeatherCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherTemp, setWeatherTemp] = useState({
    celsius: "",
    feels_like: "",
  });
  const [weatherInfo, setWeatherInfo] = useState("");
  const [weatherWind, setWeatherWind] = useState("");
  const [weatherhumidity, setWeatherhumidity] = useState("");
  const [weatherPressure, setWeatherPressure] = useState("");

  useEffect(() => {
    async function getWeather() {
      const result = await fetchWeather("Helsinki");
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
    }
    getWeather();
  }, []);
  return (
    <Container maxWidth="lg">
      <img src={weatherIcon} />
      <Grid container spacing={5}>
        {/* Otsikko teksti ylälaatikon päällä*/}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Päivän Sää
          </Typography>
        </Grid>

        {/* Ylälaatikko */}
        <Grid item xs={12}>
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
                  Lämpötila:
                  {weatherTemp.celsius > 0 ? " +" : " -"}
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
            Sää tiedot
          </Typography>
          <Paper elevation={3} sx={sharedPaperStyle}>
            {/* Container kolmelle pienelle laatikolle */}

            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    Humidity
                    <img src="./src/images/dry.png" />
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
                    Tuuli
                    <img src="./src/images/wind.png" />
                    {/* <AirIcon fontSize="large"/> */}
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
                    <img src="./src/images/press.png" />
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
        <Grid item xs={6}>
          <Typography variant="h4" color="primary">
            Sää inffoa
          </Typography>

          <Paper elevation={3} sx={sharedPaperStyle}>
            <Typography color="primary" align="center">
              Oikean
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherGrids;
