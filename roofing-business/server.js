const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const workRequestsRouter = require('./routes/workrequests');
const usersRouter = require('./routes/users');

require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/workrequests', workRequestsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});