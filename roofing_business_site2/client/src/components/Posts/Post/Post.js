import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles"
import {useDispatch} from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const color = green['A400'];
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <AssignmentIcon fontSize="small"/>
                    &nbsp; Accept &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" className={classes.completeButton} onClick={() => dispatch(deletePost(post._id))}>
                    <DoneIcon fontSize="small"/>
                    &nbsp; Complete &nbsp;
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    &nbsp; Delete &nbsp;
                </Button>
            </CardActions>
            
        </Card>
    )
}

export default Post