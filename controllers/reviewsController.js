const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Review
            .find(req.query)
            .sort({ date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {

    },
    findById: function(req, res) {

    },
    updateById: function(req, res) {

    },
    deleteById: function(req, res) {

    },
};