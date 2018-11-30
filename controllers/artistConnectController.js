const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        // console.log(req);
        db
            .artistConnect
            .find(req.query)
            .sort({_id: 1})
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: (req, res, next) => {
        db
            .artistConnect
            .findById(req.params.id)
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    },
    findByFloor: (req, res, next) => {
        const floor = parseInt(req.params.floor);
        db
            .artistConnect
            .find( { "floor": floor})
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    }, 
    updateArtistConnect: (req, res) => {
        console.log('requesssssssss', req);
        db
            .artistConnect
            .updateOne({ _id: req.params.id }, { $set: req.body }, { upsert: true})
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    },
}

// works in the mongo shell
// db.getCollection('artistConnect').updateOne({ _id: ObjectId("5b4fe9ef53991e061f136550") }, {$set:
// {
//     articleDescription: "Driving along Miracle Mile in the heart of Museum Row, it's easy to miss Akio Hizume's bamboo Fibonacci Tunnel on the patio of the Craft and Folk Art Museum (CAFAM). But if you stop to take a look, you can actually become physically immersed inside the architecturally inspired tunnel itself. You may even wander into the museum as well, where a related exhibit, 'Bamboo,' chronicles the rapidly changing dynamics of Japanese bamboo basketry, all thanks to the late L.A.-based entrepreneur and collector Lloyd Cotsen, who, incidentally, was the CEO of Neutrogena Corporation and the marketing genius who turned an amber-colored soap into a household name.",
//     articleLink: "https://www.laweekly.com/arts/the-fibonacci-sequence-and-the-skincare-mogul-with-a-secret-fetish-for-japanese-bamboo-basketry-9559210",
//     articleTitle: "The Fibonacci Sequence",
//     floor: 1,
//     picture: "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531873144/sp-bamboo-ws.jpg",
//     socialLink: "https://www.youtube.com/channel/UCliTTpu9eqZaAst6PK1wZyg"
// }},
// { upsert: true })