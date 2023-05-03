import React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import styled from 'styled-components'
import { Navigate } from 'react-router-dom';


const styles = theme => ({
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(),
  },
  submit: {
      marginTop: theme.spacing(3),
  },
});

const Login = (props) => {
  const { classes } = props;
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const form = {
    FullName: null,
    Email: email,
    Password: password
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    SetData(form)
  };
  const SetData=(form)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
  };
    fetch('http://127.0.0.1:8000/api/users/',requestOptions)
    .then((response) => {
      return response.json();
  }).then((data) => {
    if (data['Code']==0){
      alert(data['Message'])
    }
    if(data['Code']==1){
      alert(data['Message']);
      window.location.href = "/";
    }
  })
  }
  return (
    <>

        <form className={classes.form} onSubmit={handleSubmit}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={(event)=>{setPassword(event.target.value)}}/>
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Login
          </Button>
        </form>

    </>
  )
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Login);