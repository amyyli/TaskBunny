(function(){

//load module
angular.module('trApp')
  .controller('ProfileController', ['$scope', '$http', '$location', 'AuthService', ProfileController]);


  function ProfileController($scope, $http, AuthService) {
    return $http({
      method: 'GET',
      url: '/auth/profile/check',
    }).success(function(data, status, headers, config){
      $scope.user = data;
    });
  }

})();