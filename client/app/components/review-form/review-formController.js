(function(){

  //load module
  angular.module('trApp')
    .controller('ReviewFormController', ['$scope', '$location', '$http', '$routeParams', 'ReviewService', 'TaskService', ReviewFormController]);

  function ReviewFormController($scope, $location, $http, $routeParams, ReviewService, TaskService){

    // get task _id from $rootParams
    var _id = $routeParams.id;

    $scope.form = {};

    // http POST on form submit
    $scope.createReview = function(){
      ReviewService.addReview($scope.form).success(function(){
        $location.path('/tasks');
      }).catch(function(err){
        console.log(err);
        $scope.errorMessage = "review creation error";
      });
    };

    $scope.redirectCall = function() {
      $location.path('/tasks');
    };

    return $http({
      method: 'GET',
      url: '/api/tasks/' + _id,
    }).success(function(data, status, headers, config){
      $scope.taskData = data;
    });

  };

})();
