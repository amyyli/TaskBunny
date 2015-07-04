(function(){

  //load module
  angular.module('trApp')
    .controller('ReviewFormController', ['$scope', '$location', 'ReviewService', ReviewFormController]);

  function ReviewFormController($scope, $location, ReviewService){
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

  };

})();
