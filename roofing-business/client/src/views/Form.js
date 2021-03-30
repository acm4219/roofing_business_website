import React, { useState, useEffect } from 'react';
import { Grid} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {getPosts} from "../actions/posts";
import Form from "../components/Form/Form";


function FormPage() {
    const [currentId, setCurrentId] = useState(null)    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grid container justify="space-between">
            <Grid item xs={12} sm={12}>
               <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
       
    )
}

export default FormPage;