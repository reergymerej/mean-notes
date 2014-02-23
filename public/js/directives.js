'use strict';


angular.module('mean.categories')
.directive('category', [function () {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/category.html'
    };
}]);