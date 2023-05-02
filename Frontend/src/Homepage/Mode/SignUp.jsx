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


const styles = theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
  });
  

const SignUp = (props) => {
  const { classes } = props;
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [FullName,setFullName] = useState("");
  const [Phone,setPhone] = useState("");
  const form = {
    Email: Email,
    Password: Password,
    FullName: FullName,
    Phone: Phone
  }
  const handleSubmit = (event) => {
    event.preventDefault();
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
      console.log(data)
  })
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="FullName">FullName</InputLabel>
          <Input name="FullName" type="FullName" id="FullName" value={FullName} autoFocus onChange={(event)=>setFullName(event.target.value)}/>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="Phone">Phone</InputLabel>
          <Input id="Phone" name="Phone" autoComplete="Phone" value={Phone} autoFocus onChange={(event)=>setPhone(event.target.value)} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="Email" name="Email" autoComplete="Email" value={Email} autoFocus onChange={(event)=>setEmail(event.target.value)}/>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="Password" type="Password" id="Password" autoComplete="current-password" value={Password} autoFocus onChange={(event)=>setPassword(event.target.value)} />
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
          onClick={()=>SetData(form)}
        >
          Sign Up
        </Button>
      </form>

    </>
  )
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SignUp);