import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import loon from "../../images/loon.png";
import { Link } from "react-router-dom";
import useStyles from './styles';

const Navbar = () => {
    
  const classes = useStyles();
  
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={loon} alt="icon" height="60" />
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Loon Roofing</Typography>
      </div>
    </AppBar>
  );
};

export default Navbar;