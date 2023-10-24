import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { sharedPaperStyle } from "../theme";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../api/usersApi";

function UserDetails() {
  useEffect(() => {
    async function findUser() {
      const result = await getUser()
      console.log(result.users)
    }
    findUser()
  },[])
  
  
  let userLoggedIn = true;
  return (
    <Grid item xs={6}>
      <Typography variant="h4" color="primary">
        Bank account
      </Typography>

      <Paper elevation={3} sx={sharedPaperStyle}>
        {userLoggedIn ? (
          <>
            <Typography color={"primary"} align="center" gutterBottom>
              Hello Matti
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Alert severity="info">Balance:</Alert>
              </Grid>

              <Grid item xs={6}>
                <Alert severity="info">Debt:</Alert>
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
              User not logged in
            </Typography>
            <Grid
              container
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item>
                <Button variant="contained" component={Link} to="/login">Log in</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Register</Button>
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </Grid>
  );
}

export default UserDetails;
