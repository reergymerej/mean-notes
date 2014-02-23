'use strict';

angular.module('mean.categories')
.controller('CategoriesCtrl', ['$scope', '$stateParams', '$location', 'Global', 'Categories', function ($scope, $stateParams, $location, Global, Categories) {

    var sortBy = function (collection, field) {
        collection.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            } else if (a[field] > b[field]) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    $scope.newCategoryName = '';
    $scope.categories = [];

    $scope.submitCategory = function (categoryName) {

        // create a $resource instance from our factory
        var category = new Categories({
            title: categoryName
        });

        category.$save(function (resp) {
            $scope.categories.unshift(resp);
            sortBy($scope.categories, 'title');
            $scope.newCategoryName = '';
        });
    };

    $scope.deleteCategory = function (category) {
        var index = $scope.categories.indexOf(category);

        category.$remove();
        $scope.categories.splice(index, 1);
    };


    // return $resource(
    //   'categories/:categoryId/:foo',

    //   {
    //       categoryId: '@_id'
    //   },

    //   {
    //       update: {
    //           method: 'PUT'
    //       }
    //   }
    // );

    // query
    // does a GET to the url
    Categories.query(function (categories) {
        $scope.categories = categories;
        sortBy($scope.categories, 'title');
    });

    // get
    // does a GET
    // Categories.get(function (categories) {
    //   console.log(categories);
    // });

    // save
    // does a POST
    // Categories.save(

    //   // post data
    //   {
    //       foo: 'bar',
    //       baz: 'quux'
    //   },

    //   function () {}
    // );


    // Categories.save(

    //   // post data
    //   {
    //       foo: 'bar',
    //       baz: 'quux',
    //       donkey: 'potato'
    //   },
        
    //   function () {}
    // );

}]);