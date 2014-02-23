'use strict';

// A reference to this file must be included in the html.
// /app/views/includes/foot.html

angular.module('mean.notes')
.factory('Notes', ['$resource', function ($resource) {

    return $resource(
        'notes/:noteId',

        // These params are used in requests.
        {
            noteId: '@_id',
            someOtherParam: 'donkey'
        },

        {
            update: { method: 'PUT' }
        }
    );
}]);