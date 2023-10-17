import { Container, Grid, Paper, Typography } from "@mui/material";
import { sharedPaperStyle } from "../theme";

function WeatherGrids() {
  return (
    // Tai maxWidth="xl"
    <Container maxWidth="lg"> 
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
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography color="secondary">Placeholder</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="secondary">Placeholder</Typography>
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
                  <Typography color="primary">SIUUUUUU</Typography>
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
