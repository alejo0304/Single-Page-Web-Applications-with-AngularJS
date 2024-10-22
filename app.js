(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
      $scope.messageClass = "";
      $scope.inputClass = "";
  
      $scope.checkItems = function () {
        if (!$scope.lunchItems.trim()) {
          $scope.message = "Please enter data first";
          $scope.messageClass = "red-message";
          $scope.inputClass = "red-border";
          return;
        }
  
        var itemsArray = $scope.lunchItems.split(',').filter(function (item) {
          return item.trim() !== "";
        });
  
        if (itemsArray.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "green-message";
          $scope.inputClass = "green-border";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass = "green-message";
          $scope.inputClass = "green-border";
        }
      };
    }
  })();