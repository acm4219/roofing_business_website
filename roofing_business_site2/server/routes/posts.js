import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, createUser, getUser } from "../controllers/posts.js"

const router = express.Router();

router.get('/', getPosts);
router.get('/', getUser);
router.post('/', createPost);
router.post('/', createUser);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;