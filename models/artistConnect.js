const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistConnectSchema = new Schema({
    floor: Number,
    picture: String,
    articleTitle: String,
    articleDescription: String,
    articleLink: String,
    socialLink: String
},
{
    collection: "artistConnect"
});

const artistConnect = mongoose.model("artistConnect", artistConnectSchema);

module.exports = artistConnect;