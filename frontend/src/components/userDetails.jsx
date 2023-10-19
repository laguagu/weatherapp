import { Button, Grid, Paper, Typography } from "@mui/material";
import { sharedPaperStyle } from "../theme";

function UserDetails() {
  return (
    <Grid item xs={6}>
      <Typography variant="h4" color="primary">
        Sää inffoa
      </Typography>

      <Paper elevation={3} sx={sharedPaperStyle}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Typography color={"primary"}>Hei Matti</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"primary"}>Kaksi</Typography>
          </Grid>
          <Grid item xs={6}>
          <Button variant="contained">Kolme</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">Neljä</Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default UserDetails;
