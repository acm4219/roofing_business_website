import React, { useState, useEffect } from 'react';
import { Grid} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {getPosts} from "../actions/posts";
import Posts from "../components/Posts/Posts"

function Request() {
    const [currentId, setCurrentId] = useState(null)    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
                            <Posts setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
    )
}

export default Request;