import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import { sharedPaperStyle } from "../theme";
import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";

function WeatherGrids() {
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("")
  
  useEffect(() => {
    async function getWeather() {
      const result = await fetchWeather("Helsinki");
      const icon = result.weather[0].icon
      setWeather(result.name);
      setWeatherIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`)
    }
    getWeather();
  }, []);

  return (
    // Tai maxWidth="xl"
    <Container maxWidth="lg">
      
      <img src={weatherIcon}/>
      <Grid container spacing={5}>
        {/* Otsikko teksti ylälaatikon päällä*/}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Päivän Sää
          </Typography>
        </Grid>

        {/* Ylälaatikko */}
        <Grid item xs={12} >
          <Paper elevation={3} sx={sharedPaperStyle} >
            {/* Lisää Laatikoita ylälaatikon sisällä */}
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography variant="h2" color="primary">
                  {weather}
                </Typography>
                <Typography color="primary" sx={{ marginTop: "40px" }}>
                  Tämä alemmas
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="primary">Kuva tänne</Typography>
                <Box
                  component="img"
                  src=""
                  alt="Description"
                  sx={{ width: "20%", borderRadius: "80px" }}
                />
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
            {/* Container kuudelle pienelle laatikolle */}
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    SIUUUUUU
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    SIUUUUUU
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{ bgcolor: "black.main" }} elevation={2}>
                  <Typography color="primary" align="center">
                    SIUUUUUU
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
            <Typography color="primary">Oikean</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherGrids;
