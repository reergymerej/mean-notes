'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Note = mongoose.model('Note');


exports.all = function(req, res) {

    // We want to load the items from the db,
    // so we need a mongoose model.

    // The reference is created here in the controller,
    // but the mongoose model is defined in /app/models/note.js.

    Note
    .find()
    .exec(function(err, notes) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(notes);
        }
    });
};

exports.create = function (req, res) {
    // This is called by the router.

    // The POST body contains the info we want to
    // create a new Note with.
    // console.log(req.body);

    // Create an instance of our mongoose Note model
    // with the data in the POST request.
    var note = new Note(req.body);

    // Save the new note to the db.
    note.save(function (err) {

        // If we had an error, let the requestor know.
        if (err) {
            console.log(err);
            res.end('error');
        } else {

            // Return the new note as JSON.
            res.jsonp(note);

        }
    });
};

exports.show = function (req, res) {

    // Send the note as JSON.
    // How did the request get the note?
    // It was added by the middleware.
    // Why was the middleware run?
    // Because our router told it to when the url
    // had the noteId param.
    res.jsonp(req.note);
};

// This is called when the request has a noteId in it.
// It adds a "note" to the request.
exports.note = function (req, res, next, id) {
    Note.load(id, function (err, note) {
        if (err) {
            return next(err);
        }

        if (!note) {
            return next(new Error('failed to load note ' + id));
        }

        // Add the note to the request so other methods
        // have access to it.
        req.note = note;

        next();
    });
};


// exports.create = function(req, res) {
//     // create it with the json passed in the request
//     var category = new Category(req.body);

//     category.user = req.user;

//     category.save(function(err) {
//         if (err) {
//             console.log(err);
//             res.end('error');

//         } else {
//             res.jsonp(category);
//         }
//     });
// };

// exports.destroy = function(req, res) {
//     var category = req.category;

//     category.remove(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 category: category
//             });
//         } else {
//             res.jsonp(category);
//         }
//     });
// };