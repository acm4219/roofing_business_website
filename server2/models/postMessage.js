import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
    insurance: String,
    service: String,
    details: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postForm = mongoose.model('PostMessage', postSchema);

export default postForm;