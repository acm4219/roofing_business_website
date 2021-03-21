const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workrequestSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    address: String, 
    insurance: String,
    service: String,
    details: String
});

const WorkRequest = mongoose.model("WorkRequest", workrequestSchema);

module.exports = WorkRequest;