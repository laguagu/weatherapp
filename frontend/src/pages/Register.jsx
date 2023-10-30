import { useState } from "react";
import { Box, TextField, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { addNewUser } from "../api/usersApi";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);
  const [debt, setDebt] = useState(0);


  const handleRegister = async () => {
    const userDetails = {
      username,
      password
    }
    const response = await addNewUser(userDetails)
    console.log(response)
    console.log("Tallennettu palvelimelle");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom align="center">
        Register
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: "20px",
        }}
      >
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="username"
          label="Balance"
          variant="outlined"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <TextField
          id="username"
          label="Debt"
          variant="outlined"
          value={debt}
          onChange={(e) => setDebt(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          // component={Link}
          // to="/login"
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
