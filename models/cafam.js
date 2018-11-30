const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const floorSchema = new Schema({
    floor: Number,
    coverPic: String,
    floorGallery: [String],
    audioTitle: String,
    audioLink: String
});

const cafamSchema = new Schema({
    tourAudience: String,
    floors: [floorSchema]
},
{
    collection: "cafam"
});

const cafam = mongoose.model("cafam", cafamSchema);

module.exports = cafam;