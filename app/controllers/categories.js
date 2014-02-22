'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    Category = mongoose.model('Category'),
    _ = require('lodash');


/**
 * Find article by id
 */
// exports.article = function(req, res, next, id) {
//     Article.load(id, function(err, article) {
//         if (err) return next(err);
//         if (!article) return next(new Error('Failed to load article ' + id));
//         req.article = article;
//         next();
//     });
// };



// /**
//  * Update an article
//  */
// exports.update = function(req, res) {
//     var article = req.article;

//     article = _.extend(article, req.body);

//     article.save(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 article: article
//             });
//         } else {
//             res.jsonp(article);
//         }
//     });
// };

// /**
//  * Delete an article
//  */


// /**
//  * Show an article
//  */
// exports.show = function(req, res) {
//     res.jsonp(req.article);
// };

/**
 * List of Articles
 */
exports.all = function(req, res) {

    // Article
    Category
    .find()
    .sort('-created')
    .populate('user', 'name username')
    .exec(function(err, categories) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            // res.jsonp([{ho:"he"}]);
            res.jsonp(categories);
        }
    });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
    // create it with the json passed in the request
    var category = new Category(req.body);

    category.user = req.user;

    category.save(function(err) {
        if (err) {
            console.log(err);
            res.end('error');

        } else {
            res.jsonp(category);
        }
    });
};

exports.destroy = function(req, res) {
    var category = req.category;

    console.log(req.category);
    console.log(req.article);

    console.log('How do we get the category?');

    category.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                category: category
            });
        } else {
            res.jsonp(category);
        }
    });
};