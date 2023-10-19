import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { sharedPaperStyle } from "../theme";

function UserDetails() {
  let userLoggedIn = false;
  console.log();

  return (
    <Grid item xs={6}>
      <Typography variant="h4" color="primary">
        Sää inffoa
      </Typography>

      <Paper elevation={3} sx={sharedPaperStyle}>
        {userLoggedIn ? (
          <>
            <Typography color={"primary"} align="center" gutterBottom>
              Hello Matti
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Alert severity="info">Sinulta loppu rahat</Alert>
              </Grid>

              <Grid item xs={6}>
                <Alert severity="info">Sinulta loppu rahat</Alert>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"primary"} align="center" gutterBottom>
                  <Button variant="contained">Logout</Button>
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography color={"primary"} align="center" gutterBottom>
              Hello Seppo
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Alert severity="info">Sinulta loppu rahat</Alert>
              </Grid>

              <Grid item xs={6}>
                <Alert severity="info">Sinulta loppu rahat</Alert>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"primary"} align="center" gutterBottom>
                  <Button variant="contained">Logout</Button>
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </Grid>
  );
}

export default UserDetails;
