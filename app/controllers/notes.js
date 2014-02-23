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




/**
 * List of Articles
 */
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

// /**
//  * Create an article
//  */
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