import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import useStyles from "./style";

const SigninButton = () => {
    const classes = useStyles();


    return (
        <div>
            <Button component={Link} to="/auth" variant="contained" className={classes.button}>Sign In</Button>
        </div>
    )
}

export default SigninButton;
