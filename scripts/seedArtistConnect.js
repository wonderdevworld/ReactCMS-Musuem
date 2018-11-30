const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below WARNING:
// The `useMongoClient` option is no longer necessary in mongoose 5.x, please
// remove it.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/museums");

const cafamArtistConnectSeed = [
    {
        "floor": 1,
        "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531873144/sp-bamboo-ws.jpg",
        "articleTitle": "The Fibonacci Sequence and the Skincare Mogul With a Secret Fetish for Japanese " +
            "Bamboo Basketry",
        "articleDescription": "Driving along Miracle Mile in the heart of Museum Row, it's easy to miss Akio Hi" +
            "zume's bamboo Fibonacci Tunnel on the patio of the Craft and Folk Art Museum (CA" +
                "FAM). But if you stop to take a look, you can actually become physically immerse" +
                "d inside the architecturally inspired tunnel itself. You may even wander into th" +
                "e museum as well, where a related exhibit, 'Bamboo,' chronicles the rapidly chan" +
                "ging dynamics of Japanese bamboo basketry, all thanks to the late L.A.-based ent" +
                "repreneur and collector Lloyd Cotsen, who, incidentally, was the CEO of Neutroge" +
                "na Corporation and the marketing genius who turned an amber-colored soap into a " +
                "household name.",
        "articleLink": "https://www.laweekly.com/arts/the-fibonacci-sequence-and-the-skincare-mogul-with" +
            "-a-secret-fetish-for-japanese-bamboo-basketry-9559210",
        "socialLink": "https://www.youtube.com/channel/UCliTTpu9eqZaAst6PK1wZyg"
    }, 
    {
        "floor": 2,
        "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531873286/KatherineGray_Portrait_squared.jpg",
        "articleTitle": "Vanishing act: Katherine Gray’s explorations in glass and light",
        "articleDescription": "Windows, eyeglasses, phones, windshields — we regularly peer through glass but barely see it. That deft disappearing act forms the nucleus of Los Angeles artist Katherine Gray’s conceptual installations.",
        "articleLink": "https://www.latimes.com/entertainment/arts/la-ca-cm-katherine-gray-20180628-story.html",
        "socialLink": "https://katherine-gray.com/home.html"
    },
    {
        "floor": 3,
        "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531872311/merion-estes-lost-horizons-35.jpg",
        "articleTitle": "Vibrant beauty in L.A. artist Merion Estes' 'Lost Horizons'",
        "articleDescription": "Merion Estes' collaged paintings on paper at CB1 invoke a tower of Babel in two dimensions: Within them, multiple visual languages are spoken at once. In each of the dozen works from the 'Lost Horizons' series (2007-2011), the L.A.-based Estes mobilizes an exuberance of means, toggling between representation, abstraction, pattern and ornament. One mode of address, one manner of engaging surface and space abuts another, all of them feeding into a vibrant, dissonant beauty",
        "articleLink": "https://www.latimes.com/entertainment/arts/la-et-cm-merion-estes-review-20170112-htmlstory.html",
        "socialLink": "https://www.instagram.com/merionestes/"
    }
];

db
    .artistConnect
    .remove({})
    .then(() => db.artistConnect.collection.insertMany(cafamArtistConnectSeed))
    .then(data => {
        console.log(data);
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });