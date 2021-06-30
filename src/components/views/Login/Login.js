import React from 'react';
import styles from './Login.module.scss';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Login = () => (
  <div className={styles.component}>
    <Container maxWidth='xs'>
      <Typography variant="h3">
        Login
      </Typography>
      <TextField
        id="login-input"
        label="Employee Id"
        type="login"
        autoComplete="current-login"
        variant="outlined"
        required
        margin='normal'
        fullWidth
      />
      <TextField
        id="password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        required
        margin='normal'
        fullWidth
      /><Button
        variant="contained"
        fullWidth
        href="/panel/"
        color='primary'
        size='large'
      >
        Sign In
      </Button>
    </Container>
  </div>
);

export default Login;
