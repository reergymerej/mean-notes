'use strict';

angular.module('mean.notes')
.controller('NotesCtrl', ['$scope', 'Notes', '$stateParams', '$location', 'Global',
function ($scope, Notes) {

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
            console.log(note);

        });
    };
}]);