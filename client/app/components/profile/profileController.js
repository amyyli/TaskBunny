(function(){

//load module
angular.module('trApp')
  .controller('profileController', ['$scope', '$location', 'AuthService', profileController]);

  function profileController($scope, AuthService) {
    $scope.user = {};

    AuthService.check().then(function(response){
      $scope.user = response.data;
      console.log($scope.user);
    });


    // $scope.name = '';
    // $scope.age = 0;
    // $scope.sex = 'yesPlease';
    // $scope.carrots = ;
    // $scope.review = 'haaaaaaaaaah bajiba jiba jaaaaaah';
    // $scope.data = $scope.check();
    // console.log($scope.data);
  }

})();