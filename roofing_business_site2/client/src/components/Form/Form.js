import React, {useState, useEffect} from 'react'
import { TextField, Button, ButtonGroup, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {createPost, updatePost} from "../../actions/posts";

function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        name: '', 
        email: '', 
        phoneNumber: '',
        address: '', 
        insurance: '',
        service: '',
        details: '', 
        selectedFile: ''
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
            
        } else {
            dispatch(createPost(postData))
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({
            name: '', 
            email: '', 
            phoneNumber: '', 
            address: '', 
            insurance: '',
            service: '',
            details: '', 
            selectedFile: ''
        });
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Service Request</Typography>
                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="Name" 
                    fullWidth 
                    value={postData.name}
                    onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                />
                <TextField 
                    name="address" 
                    variant="outlined" 
                    label="Address" 
                    fullWidth 
                    value={postData.address}
                    onChange={(e) => setPostData({ ...postData, address: e.target.value })}
                />
                <TextField 
                    name="email" 
                    variant="outlined" 
                    label="Email" 
                    fullWidth 
                    value={postData.email}
                    onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                />
                <TextField 
                    name="phoneNumber" 
                    variant="outlined" 
                    label="Phone Number" 
                    fullWidth 
                    value={postData.phoneNumber}
                    onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })}
                />
                <TextField 
                    name="insurance" 
                    variant="outlined" 
                    label="Insurance Provider" 
                    fullWidth 
                    value={postData.insurance}
                    onChange={(e) => setPostData({ ...postData, insurance: e.target.value })}
                />
                <TextField 
                    name="service" 
                    variant="outlined" 
                    label="Service" 
                    fullWidth 
                    value={postData.service}
                    onChange={(e) => setPostData({ ...postData, service: e.target.value })}
                />
                <TextField 
                    name="details" 
                    variant="outlined" 
                    label="Any Other Details?" 
                    fullWidth 
                    value={postData.details}
                    onChange={(e) => setPostData({ ...postData, details: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <p>Please add a photo of the house if you would like.</p>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <ButtonGroup>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                    <Button variant="contained" className={classes.buttonSubmit} color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
                </ButtonGroup>
                
            </form>
        </Paper>
    )
}

export default Form