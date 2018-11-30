const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/museums"
);

const cafamSeed =  [
    {
        "tourAudience": "General Tour",
        "floors": [
            {
                "floor": 1,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871142/14cceb955b.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871149/B7d3oAzCIAA6YEA.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1528585532/6086f23ddc045c27a33d2014eb1a8c31.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1528585532/honma_hideaki_-_basketry_sculpture_sign_of_wind.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1531871127/JG8M920-2.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1531871176/1.jpg"
                ],
                "audioTitle": "Bamboo",
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "artistConnect": {
                	"picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531873144/sp-bamboo-ws.jpg",
                	"articleTitle": "The Fibonacci Sequence and the Skincare Mogul With a Secret Fetish for Japanese Bamboo Basketry",
                	"articleDescription": "Driving along Miracle Mile in the heart of Museum Row, it's easy to miss Akio Hizume's bamboo Fibonacci Tunnel on the patio of the Craft and Folk Art Museum (CAFAM). But if you stop to take a look, you can actually become physically immersed inside the architecturally inspired tunnel itself. You may even wander into the museum as well, where a related exhibit, 'Bamboo,' chronicles the rapidly changing dynamics of Japanese bamboo basketry, all thanks to the late L.A.-based entrepreneur and collector Lloyd Cotsen, who, incidentally, was the CEO of Neutrogena Corporation and the marketing genius who turned an amber-colored soap into a household name.",
                    "articleLink": "https://www.laweekly.com/arts/the-fibonacci-sequence-and-the-skincare-mogul-with-a-secret-fetish-for-japanese-bamboo-basketry-9559210",
                    "socialLink": "https://www.youtube.com/channel/UCliTTpu9eqZaAst6PK1wZyg"
                }
            },
            {
                "floor": 2,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_600/v1531871376/a7dcb8845b66fb9e83c7881ae5b0b716.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871395/20110602133546-DDlogs.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1531871364/colorful-art-work-artist-katherine-gray.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871351/083b574f70e3d191b0b214f43e7ec418.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1531871341/vas-callan-trio.jpg"
                ],
                "audioTitle": "Katherine Gray: As Clear as the Experience",
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "artistConnect": {
                    "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531873286/KatherineGray_Portrait_squared.jpg",
                	"articleTitle": "Vanishing act: Katherine Gray’s explorations in glass and light",
                	"articleDescription": "Windows, eyeglasses, phones, windshields — we regularly peer through glass but barely see it. That deft disappearing act forms the nucleus of Los Angeles artist Katherine Gray’s conceptual installations.",
                    "articleLink": "https://www.latimes.com/entertainment/arts/la-ca-cm-katherine-gray-20180628-story.html",
                    "socialLink": "https://katherine-gray.com/home.html"
                }
            },
            {
                "floor": 3,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_600/v1531872345/merion-estes-Desolation-Row.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531872328/merion-estes-lost-horizons-49.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531872311/merion-estes-lost-horizons-35.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1531872293/la-cnakano-1484277815-snap-photo.jpg"
                ],
                "audioTitle": "Merion Estes: Unnatural Disasters",
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "artistConnect": {
                    "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531872311/merion-estes-lost-horizons-35.jpg",
                	"articleTitle": "Vibrant beauty in L.A. artist Merion Estes' 'Lost Horizons'",
                	"articleDescription": "Merion Estes' collaged paintings on paper at CB1 invoke a tower of Babel in two dimensions: Within them, multiple visual languages are spoken at once. In each of the dozen works from the 'Lost Horizons' series (2007-2011), the L.A.-based Estes mobilizes an exuberance of means, toggling between representation, abstraction, pattern and ornament. One mode of address, one manner of engaging surface and space abuts another, all of them feeding into a vibrant, dissonant beauty",
                    "articleLink": "https://www.latimes.com/entertainment/arts/la-et-cm-merion-estes-review-20170112-htmlstory.html",
                    "socialLink": "https://www.instagram.com/merionestes/"
                }
            }
        ]
    }
];

db.cafam
  .remove({})
  .then(() => db.cafam.collection.insertMany(cafamSeed))
  .then(data => {
    console.log(data);
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });