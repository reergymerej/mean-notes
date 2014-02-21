'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
  $scope.global = Global;

  $scope.menu = [
    {
      title: 'Articles',
      link: 'articles'
    },
    {
      title: 'Create New Article',
      link: 'articles/create'
    },
    {
      title: 'Notes',
      link: 'notes'
    },
    {
      title: 'Categories',
      link: 'categories'
    }
  ];
  
  $scope.isCollapsed = false;
}]);