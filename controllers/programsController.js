const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        // console.log(req);
        db.programs
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: (req, res, next) => {
        db.programs
            .findById(req.params.id)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    createProgram: (req, res) => {
        console.log('hey request', req);
        db.programs
            .create(req.body)
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    },
    updateProgram: (req, res) => {
        console.log('requesssssssss', req);
        db.programs
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    },
    removeProgram: (req, res) => {
        db.programs
            .findById({ _id: req.params.id })
            .then(cafamProgramsModel => cafamProgramsModel.remove())
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    }
}