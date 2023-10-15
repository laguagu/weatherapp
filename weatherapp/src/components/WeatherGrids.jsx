import { Grid, Paper, Typography } from "@mui/material";

function WeatherGrids() {
    return(
        <Grid container spacing={5} sx={{ padding: "200px" , }}>
        {/* Otsikko teksti ylälaatikon päällä*/}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Päivän Sää
          </Typography>
        </Grid>
  
        {/* Ylälaatikko */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "100px", bgcolor:"black.main"}}>
            <Typography color="primary">Placeholder</Typography>
          </Paper>
        </Grid>
  
        {/* Vasen alalaatikko */}
        <Grid item xs={6}>
          <Typography variant="h4" color="primary">
            Sää tiedot
          </Typography>
          <Paper elevation={3} sx={{ padding: "100px", height: 100, bgcolor:"black.main" }}>
            <Typography color="primary">Vasemman</Typography>
          </Paper>
        </Grid>
  
        {/* Oikea alalaatikko */}
        <Grid item xs={6}>
          <Typography variant="h4" color="primary">
            Sää inffoa
          </Typography>
          <Paper elevation={3} sx={{ padding: "100px", height: 100, bgcolor:"black.main"}}>
            <Typography color="primary">Oikean</Typography>
          </Paper>
        </Grid>
      </Grid>
    )
}


export default WeatherGrids;