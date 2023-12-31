import { useState } from "react";
import { Box, TextField, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../api/usersApi";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);
  const [debt, setDebt] = useState(0);
  const [error, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userDetails = {
      username,
      password,
      balance,
      debt,
    };
    try {
      const response = await addNewUser(userDetails);
      if (response.success) {
        navigate("/login")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Unknown error";
      setErrorMessage(errorMessage);
      console.error("Cant register user:", error);
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" gutterBottom align="center">
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
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Container>
  );
}

export default Register;
