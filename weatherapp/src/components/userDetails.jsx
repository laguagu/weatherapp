import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { sharedPaperStyle } from "../theme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../api/usersApi";

function UserDetails() {
  const [balance, setBalance] = useState(0);
  const [debt, setDebt] = useState(0);
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    async function findUser() {
      const result = await getUser();
      if (result){
        setBalance(result.balance)
        setDebt(result.debt)
        setloggedIn(true)
      }
    }
    findUser();
  }, []);

  return (
    <Grid item xs={6}>
      <Typography variant="h4" color="primary">
        Bank account
      </Typography>

      <Paper elevation={3} sx={sharedPaperStyle}>
        {loggedIn ? (
          <>
            <Typography color={"primary"} align="center" gutterBottom>
              Hello Matti
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Alert severity="info">Balance: {balance}</Alert>
              </Grid>

              <Grid item xs={6}>
                <Alert severity="info">Debt: {debt}</Alert>
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
                <Button variant="contained" component={Link} to="/login">
                  Log in
                </Button>
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
