const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        db.cafam
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: (req, res, next) => {
        db.cafam
            .findById(req.params.id)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    findByFloor: (req, res, next) => {
        const floor = parseInt(req.params.floor);
        db.cafam
            .aggregate([
            {
                $project: {
                    floors: {
                        $filter: {
                            input: '$floors',
                            as: 'floor',
                            cond: { $eq: ["$$floor.floor", floor]}
                        }
                    }
                }
            }
            ])
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status[422].json(err));
    },
    // post
    addImgToGallery: (req, res) => {
        const floor = parseInt(req.params.floor);
        const pushedImgString = req.body.pushedImg;
        db.cafam
        .updateOne({ 'floors.floor': floor},
             {$push: { 'floors.$[element].floorGallery': pushedImgString}},
             { arrayFilters: [{ 'element.floor': floor }]})
        .then(cafamModel => res.json(cafamModel))
        .catch(err => res.status[422].json(err));
    }, 
    updateLinks: function(req, res) {
        if (req.body.pictureInput) {
            const floor = parseInt(req.params.floor);
            const position = parseInt(req.body.position);
            const mongoSetNestedArrayPositionFilterString = `floors.$[element].floorGallery.${position}`;
            console.log('The string=====', mongoSetNestedArrayPositionFilterString);
            db.cafam
                .updateOne({ 'floors.floor': floor},
                {$set: { [mongoSetNestedArrayPositionFilterString]: req.body.pictureInput }},
                { arrayFilters: [{ 'element.floor': floor }]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        } else if (req.body.itemToDelete) {
            const floor = parseInt(req.params.floor);
            console.log('the floor is :::::', floor);
            const itemToDelete = req.body.itemToDelete;
            console.log(req.body);
            db.cafam
                .updateOne({ 'floors.floor': floor },
                {$pull: { 'floors.$[element].floorGallery': { $in: [itemToDelete] }}},
                { arrayFilters: [{ 'element.floor': floor }]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        } else if (req.body.coverImg) {
            console.log(req);
            const floor = parseInt(req.params.floor);
            db.cafam
                .updateOne({ 'floors.floor': floor },
                {$set: { 'floors.$[element].coverPic': req.body.coverImg }},
                { arrayFilters: [{ 'element.floor': floor }]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        } else {
            const floor = parseInt(req.params.floor);
            // console.log('MY REQUESTS BODY:::::::::::=======', req.body);
            db.cafam
                .updateOne({ 'floors.floor': floor},
                {$set: { 'floors.$[element].audioLink': req.body.input}},
                { arrayFilters: [{ 'element.floor': floor}]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        }
    },
    // deleteImg: (req, res) => {
    //     const floor = parseInt(req.params.floor);
    //     console.log('the floor is :::::', floor);
    //     const itemToDelete = req.body.itemTo;
    //     console.log(req.body);
    //     db.cafam
    //         .updateOne({ 'floors.floor': floor },
    //         {$pull: { 'floors.$[element].floorGallery': { $in: [itemToDelete] }}},
    //         { arrayFilters: [{ 'element.floor': floor }]})
    //         .then(cafamModel => res.json(cafamModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.cafam
    //         .findById({ _id: req.params.id })
    //         .then(cafamModel => cafamModel.remove())
    //         .then(cafamModel => res.json(cafamModel))
    //         .catch(err => res.status(422).json(err));
    // }
}
// works in the shell but not on robo 3t
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//             {$set: { 'floors.$[element].audioLink': 'testywoooooo' }},
//             { arrayFilters: [{ 'element.floor': 1 }]});

// this will push something in to my nested array but won't necissarily update one
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//              {$push: { 'floors.$[element].floorGallery': 
//                  {
//                  $each: ['holy smokes'],
//                  $position: 2
//                  } 
//                  }},
//              { arrayFilters: [{ 'element.floor': 1 }]});

// will update seems like but how to pass the position into the string?
// works but have to wrap the whole concated sting in []
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//             {$set: { 'floors.$[element].floorGallery.2': 'testywoooooo' }},
//             { arrayFilters: [{ 'element.floor': 1 }]});

// works to delete but need to pass in element string
// db.getCollection('cafam').updateOne({ 'floors.floor': 1 },
//              {$pull: { 'floors.$[element].floorGallery': { $in: [null] }}},
//              { arrayFilters: [{ 'element.floor': 1 }]})