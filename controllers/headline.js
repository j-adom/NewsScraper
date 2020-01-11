// Controller for our headlines
// ============================
var db = require("../models");

module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
     db.Headline.find({}).sort({date: 1})
    .then(function(dbHeadline) {
      // If we were able to successfully find Headlines, send them back to the client
      res.json(dbHeadline);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  },
  // Delete the specified headline
  delete: function(req, res) {
     db.Headline.remove(
      {
        _id: req.params.id
      },   function(error, removed) {
        // Log any errors from mongojs
        if (error) {
          console.log(error);
          res.send(error);
        }
        else {
          // Otherwise, send the mongojs response to the browser
          // This will fire off the success function of the ajax request
          console.log(removed);
          res.send(removed);
        }
      }
    )
  },
  // Update the specified headline
  update: function(req, res) {
     db.Headline
     .findOneAndUpdate({ _id: req.params.id }, req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
  }
};
