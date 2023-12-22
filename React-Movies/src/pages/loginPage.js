import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';


const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const login = async () => {
        context.authenticate(userName, password);
        const Authenticated = context.isAuthenticated;
        if (!Authenticated) {
            setError(true);
        }
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Paper style={{ padding: '20px', width: '300px' }}>
                <Typography variant="h5">Login page</Typography>
                <Typography>You must log in to view the protected pages</Typography>
                {error && (<Typography variant="body1" style={{ color: 'red' }}>Username or Password is incorrect</Typography>)}
                <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth onClick={login}>
                    Log in
                </Button>
                <Typography style={{ marginTop: '10px' }}>
                    Not Registered? <Link to="/signup">Sign Up!</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default LoginPage;