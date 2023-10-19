import { useState } from 'react';
import { Box, TextField, Typography, Container, Button } from "@mui/material";

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")



    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>Sign in</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop:"20px"}}>
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
                <Button variant="contained" color="primary" onClick={"#"}>
                    Sign in
                </Button>
            </Box>
        </Container>
    )
}

export default Login;
