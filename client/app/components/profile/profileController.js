(function(){

//load module
angular.module('trApp')
  .controller('profileController', ['$scope', '$location', profileController]);

  function profileController() {
    $scope.name = '';
    $scope.age = 0;
    $scope.sex = 'yesPlease';
    $scope.carrots = ;
    $scope.review = 'haaaaaaaaaah bajiba jiba jaaaaaah';

  }

})();