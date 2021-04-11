import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import {getPosts} from "../actions/posts"
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer"

const Requests = () => {
    const [currentId, setCurrentId] = useState(null)    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        <div>
            <Footer />
        <Grow in>
                <Container>
                
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
                
          </Grow>
          
        </div>
    )
}

export default Requests