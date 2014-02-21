'use strict';

angular.module('mean.categories')
.controller('CategoriesCtrl', [
  '$scope', '$stateParams', '$location', 'Global'/*, 'Articles'*/,
  function ($scope, $stateParams, $location, Global) {
    $scope.foo = 'yo, foo!';
}]);