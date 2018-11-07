import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './login-form.css';


class LoginForm extends Component {
  render() {
    return(
      <div className="form">
        <Paper className="paper-form" elevation={15}>
          <span className="label">Log In</span>
          <TextField
          className="input"
          label="Email"
          margin="normal"
          variant="outlined"
          value="illia.sydun@gmail.com"
        />
        <TextField
            className="input"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value="passwordpass"
          />
        <div className="buttons">
          <Button className="button">Log in</Button>
          <Button className="button">Sign up</Button>
        </div>

        </Paper>
      </div>
    );
  }
}

export default LoginForm;
