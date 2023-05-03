import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LandingPage = (props) => {
  console.log(props)
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              to="/form"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </Button>
          {/* A menuicon with a drop down. When pressed a dropdown menu should be visible. */}
          <MenuIcon />
          


        </Toolbar>
      </AppBar>

    </>
  )
}

export default LandingPage