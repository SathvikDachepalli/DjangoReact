import React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styled from 'styled-components'
import SignUp from './Mode/SignUp';
import Login from './Mode/Login';

const Main= styled.div`
    width: auto;
    display: block;
    margin-left: 24px;
    margin-right: 24px;
    @media (min-width: 400px) {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
`

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(),
    },
    submit: {
      marginTop: theme.spacing(3),
    },
    Change:{
        marginTop: theme.spacing(1.5),  
        "&:hover>a":{
            color: theme.palette.secondary.main,
        }
    }
  });
  

const LoginPage = (props) => {
    const { classes } = props;
    const haveAcnt =false;
    const [status,setStatus] = useState(haveAcnt);
    const Change = () =>{
      setStatus(!status);
    }
    
  return (
    <>
        <Main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        {status ? "SignUp" :"Login"}
        </Typography>
        {status ? <SignUp ></SignUp>:<Login></Login>}
        <div className={classes.Change} onClick={()=>{Change()}}>  {status ? "Did you have an Account?":"Create your account? "}<a > {status ? "Login":"SignUp"}  </a> </div>
      </Paper>
    </Main>
    </>
  )
}
LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(LoginPage);