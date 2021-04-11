import React from 'react'
import { Button, Typography, Card, CardContent, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import SigninButton from "../../components/SigninButton/SigninButton";

function Entry() {
    const classes = useStyles();
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Residential Roofing</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Agricultural Roofing</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Roof Hail Damage</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>LP Smart Side</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Commercial Roofing</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Roof Repair</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Roof Storm Damage</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Hardie Board Siding</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Multi-Family Roofing</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Roof Replacement</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Vinyl Siding</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Soffit/Fascia Replacement</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Gutter Repair and Replacement</Paper>
            </Grid>
          </React.Fragment>
        );
      }

    return (
      <div>
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h3" component="h2" align="center">
                    Welcome to Loon Roofing and Siding!
                </Typography>
                <hr />
                <Typography gutterBottom variant="h6" color="textPrimary" component="h2">
                   At Loon Roofing our mission is to provide you with an incredible experience improving and repairing your home. We're a locally owned and operated General Contractor that gets the job done right.
                </Typography>
                <br />
                <Typography gutterBottom variant="h6" component="h2">
                    Some of our services include:
                </Typography>
                <br />
                <Typography gutterBottom variant="h6" component="h2">
                    <Grid container spacing={1}>
                     <Grid container item xs={12} spacing={4}>
                        <FormRow />
                     </Grid>
                    </Grid>
                </Typography>
                <br />
                <Button variant="contained" color="primary" size="large" fullWidth component={Link} to='/requestform'>Contact Us About Our Services!</Button>
                
            </CardContent>
        </Card>
        <br />
        <SigninButton />
        </div>
        
    )
}

export default Entry;