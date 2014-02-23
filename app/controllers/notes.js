'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Note = mongoose.model('Note');


// exports.notes = function (req, res, next, id) {
//     Category.load(id, function (err, category) {

//         if (err) {
//             return next(err);
//         }

//         if (!category) {
//             return next(new Error('Failed to load category ' + id));
//         }

//         req.category = category;
//         next();
//     });
// };


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
    console.log(req.body);

    // Create an instance of our mongoose Note model
    // with the data in the POST request.
    var note = Note(req.body);

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