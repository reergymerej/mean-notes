'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
    .state('all articles', {
        url: '/articles',
        templateUrl: 'views/articles/list.html'
    })
    .state('create article', {
        url: '/articles/create',
        templateUrl: 'views/articles/create.html'
    })
    .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: 'views/articles/edit.html'
    })
    .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: 'views/articles/view.html'
    })
    .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    })
    .state('notes', {
        url: '/notes',
        templateUrl: 'views/notes/list.html'
    })

    // What are these states about?
    .state('create note', {
        url: '/notes/create',
        templateUrl: 'views/notes/create.html'
    })

    // view a note by id
    .state('note by id', {

        // The token used here is what the value will be
        // available as in $stateProvider.
        url: '/notes/:noteId',

        // We need a template to display.
        templateUrl: 'views/notes/view.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories/list.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
