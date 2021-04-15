import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

function LoginComponent(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
      <>
        <h1>Welcome to Login</h1>
        <TextField
          key="username"
          label="Enter username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></TextField>
        <br/>
        <TextField
          key="password"
          label="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <br/>
        <Link to="/home">
        <Button
        variant="raised"
        color="primary"
        >LOGIN</Button>
        </Link>
      </>
    );
}

export default LoginComponent;