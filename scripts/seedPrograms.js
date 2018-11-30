const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below WARNING:
// The `useMongoClient` option is no longer necessary in mongoose 5.x, please
// remove it.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/museums");

const cafamProgramSeed = [
    {
        "price": 10,
        "memberInfo": "Free for members (includes materials, drinks, and snacks)",
        "title": "Cyanotypes with Meg Madison: A CraftLab Family Workshop!",
        "time": "Thursday, June 7 | 7:00–9:00pm",
        "description": "Photographer Meg Madison leads a unique workshop on making cyanotypes, a photogr" +
                "aphic technique that uses sunlight to print shadows onto paper. Create compositi" +
                "ons with leaves, branches, flowers, and other objects and watch as the sunlight " +
                "turns the shadows into beautiful blue and white sun-prints.",
        "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_429/v1527481169/embr" +
                "oid.jpg",
        "registrationLink": "https://www.eventbrite.com/e/craftlab-cyanotype-workshop-with-meg-madison-ticket" +
                "s-44390052843"
    }, {
        "price": 90,
        "memberInfo": "$65 members (includes ingredients, tools & spirits)",
        "title": "An Old-Fashioned Craft-Cocktail Workshop with Bar Mattachine",
        "time": "Sunday, June 17. 2:00pm–4:00pm",
        "description": "DTLA’s Bar Mattachine leads a special mixology workshop teaching three variation" +
                "s of crafting an Old-Fashioned cocktail. Participants will create their own drin" +
                "ks, taste test, and get their own toolkit to make drinks at home. Take-home tool" +
                "kit includes strainer, shakers, bitters, and cocktail-mixing spoons. For ages 21" +
                "+",
        "picture": "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_415/v1527481169/barm" +
                ".png",
        "registrationLink": "https://cafam.formstack.com/forms/cocktail_workshop_june"
    }
];

db
    .programs
    .remove({})
    .then(() => db.programs.collection.insertMany(cafamProgramSeed))
    .then(data => {
        console.log(data);
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });