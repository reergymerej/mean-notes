'use strict';

var notes = require('../controllers/notes');

module.exports = function(app) {


    // When we see '/notes', we're going to run a function in the
    // notes controller.  We need a controller.
    app.get('/notes', notes.all);

    // http://expressjs.com/api.html#app.param
    // Map logic to route parameters. For example when :user 
    // is present in a route path you may map user loading 
    // logic to automatically provide req.user to the route, 
    // or perform validations on the parameter input.
    // app.param('categoryId', categories.category);
};