'use strict';

angular.module('mean.notes')
.controller('NotesCtrl', ['$scope', 'Notes', '$location', '$stateParams', 'Global',
function ($scope, Notes, $location, $stateParams) {

    // Let's display the notes from the service.
    $scope.notes = [];

    // fetch from the service with our injected $resource Notes
    // Notes is defined in /public/js/services/notes.js.
    Notes.query(function (notes) {
        $scope.notes = notes;
    });

    // Is it better to pass the values through to the 
    // method or to query for them here?
    // The articles controller pulls them from the current
    // scope.  That's fine, since each of the controls 
    // has an ngModel.
    $scope.create = function () {

        // create a new Notes instance
        var note = new Notes({
            name: $scope.name
        });

        // Notes is a $resource, so we can use $save.
        // This POSTs to /notes, so the backend needs
        // to know how to handle this route.
        note.$save(function (note) {

            // redirect to the new note
            // http://docs.angularjs.org/api/ng/service/$location

            // This means we need to handle this route (/notes/:noteId)
            // in /public/js/config.js.

            // note._id is added by MongoDB.
            $location.path('notes/' + note._id);
        });
    };

    // We need a way to load a note by id.
    $scope.findOne = function () {

        // Load the note identified in $stateParams.
        // This means we need to set up a route
        // in /app/routes/notes.js for /notes/:noteId.
        Notes.get(

            // query params
            {
                // $stateParams pulls id from url and assigns to noteId,
                // as specified in the path (/public/js/config.js).
                noteId: $stateParams.noteId
            },

            // callback with results
            function (note) {
                $scope.note = note;
            }
        );

        // Articles.get({
        //     articleId: $stateParams.articleId
        // }, function(article) {
        //     $scope.article = article;
        // });
    };
}]);