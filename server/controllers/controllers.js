const mongoose = require('mongoose');
const Team = mongoose.model('Team');

module.exports = {
    readAll: (req, res) => {
        Team.find()
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readOne: (req, res) => {
        Team.findOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    create: (req, res) => {
        Team.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    updateOne: (req, res) => {
        Team.updateOne({_id:req.params.id}, req.body, {new:true, useValidators:true})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    deleteOne: (req, res) => {
        Team.deleteOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
}