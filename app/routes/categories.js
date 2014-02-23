'use strict';

// Articles routes use articles controller
// var articles = require('../controllers/articles');
var categories = require('../controllers/categories');

// var authorization = require('./middlewares/authorization');

// Article authorization helpers
// var hasAuthorization = function(req, res, next) {
//  if (req.article.user.id !== req.user.id) {
//         return res.send(401, 'User is not authorized');
//     }
//     next();
// };

module.exports = function(app) {

    app.get('/categories', categories.all);
    app.post('/categories', categories.create);
    app.del('/categories/:categoryId', categories.destroy);

    // app.get('/articles', articles.all);
    // app.get('/articles/:articleId', articles.show);
    // app.put('/articles/:articleId', authorization.requiresLogin, hasAuthorization, articles.update);
    // app.del('/articles/:articleId', authorization.requiresLogin, hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    // This is some type of middleware that adds the category 
    // to the request.

    // http://expressjs.com/api.html#app.param
    // Map logic to route parameters. For example when :user 
    // is present in a route path you may map user loading 
    // logic to automatically provide req.user to the route, 
    // or perform validations on the parameter input.
    app.param('categoryId', categories.category);
};