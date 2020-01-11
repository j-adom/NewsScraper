// Controller for our notes
// ========================
var db = require("../models");

module.exports = {
  // Find one note
  find: function(req, res) {
    db.Note.find({ _headlineId: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  // Create a new note
  create: function(req, res) {
   db.Note
    .create(req.body)
    .then(dbNote => res.json(dbNote))
    .catch(err => res.status(422).json(err))
    
  },
  // Delete a note with a given id
  delete: function(req, res) {
    db.Note
    .find({ _headlineId: req.params.id })
    .then(dbNote => dbNote.remove())
    .then(dbNote => res.json(dbNote))
    .catch(err => res.status(422).json(err));
  }
};

