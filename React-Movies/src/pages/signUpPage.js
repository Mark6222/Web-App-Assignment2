import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }else{
        setError(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
        <Typography variant="h5">Sign Up page</Typography>
        <Typography>You must register a username and password to log in</Typography>
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
        <TextField
          id="passwordAgain"
          label="Password again"
          type="password"
          variant="outlined"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error && (<Typography variant="body1" style={{ color: 'red' }}>Please check your password is correct</Typography>)}
        <Button variant="contained" color="primary" fullWidth onClick={register}>
          Register
        </Button>
        <Typography style={{ marginTop: '10px' }}>
          Already Registered? <Link to="/login">Log In!</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};


export default SignUpPage;