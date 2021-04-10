import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid} from "@material-ui/core";
import { useDispatch } from 'react-redux'
import {getPosts} from "../actions/posts"
import Posts from "../components/Posts/Posts";

const Requests = () => {
    const [currentId, setCurrentId] = useState(null)    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Requests