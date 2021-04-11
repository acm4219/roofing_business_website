import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb://LoonAdmin1:tQ6cyEtveT37QXC@acm4219-loonroofing-mongo-production/loonroofing';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
 })
 .catch((err) => console.log(err.message));

 mongoose.set("useFindAndModify", false);