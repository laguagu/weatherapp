import { useContext, useState } from "react";
import { Box, TextField, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/usersApi";
import { UserContext } from "../context/UserContext";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userDetails = {
      username: username,
      password: password,
    };
    console.log(userDetails);
    const logginResult = await loginUser(userDetails);

    if (logginResult.success) {
      console.log("Onnistui");
      navigate("/");
    } else {
      setError("Wrong username or password");
      setTimeout(() => {
        setError("")
      }, 4000);
    }
  };

  function button() {
    setLoggedIn(true)
    console.log(loggedIn)
  }
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom align="center">
        Sign in
      </Typography>
    <Button onClick={button}>asd</Button>
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
          label="Käyttäjänimi"
          variant="outlined"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="password"
          label="Salasana"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          {/* component={Link} to="/" */}
          Sign in
        </Button>
        {error && <h1>{error}</h1>}
      </Box>
    </Container>
  );
}

export default Login;
