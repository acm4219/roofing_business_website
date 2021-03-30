import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, AppBar, Typography, Grow } from "@material-ui/core";
import { useDispatch } from 'react-redux'

import {getPosts} from "./actions/posts";
import Posts from "./views/Request";
import Form from "./views/Form";
import Entry from "./views/Entry/Entry";
import loon from "./images/loon.png";
import useStyles from "./styles"

function App() {
    const [currentId, setCurrentId] = useState(null)    
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Router>
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
            <img className={classes.image} src={loon} alt="memories" align="center" height="100" />
                <Typography className={classes.heading} variant="h2" align="center" component={Link} to="/requests">Loon Roofing</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Entry />
                        </Route>
                        <Route path="/requestform">
                            <Form />
                        </Route>
                        <Route path="/requests">
                            <Posts />
                        </Route>
                    </Switch>
                </Container>
            </Grow>
        </Container>
        <br />
        </Router>

        
    )
}

export default App
