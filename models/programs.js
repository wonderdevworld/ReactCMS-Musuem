const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cafamProgramSchema = new Schema({
    price: Number,
    memberInfo: String,
    title: String,
    time: String,
    description: String,
    picture: String,
    registrationLink: String
},
{
    collection: "programs"
});

const programs = mongoose.model("cafamPrograms", cafamProgramSchema);

module.exports = programs;