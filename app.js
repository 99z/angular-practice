var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl',
    ['$scope',
    function($scope) {
      $scope.title = "Hello from an Angular controller!";

      $scope.cats = ['Kitty',
                     'Ginger',
                     'Gizmo',
                     'Tom',
                     'Shadow',
                     'Chloe',
                     'Smokey'];
    }]);
