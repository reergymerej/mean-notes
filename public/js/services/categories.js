'use strict';

angular.module('mean.notes').factory('Categories', ['$resource', function ($resource) {

    return $resource(
        'categories/:categoryId/:foo',
        {
            categoryId: '@_id',
            foo: '@donkey'
        },

        {
            update: {
                method: 'PUT'
            }
        }
    );
}]);