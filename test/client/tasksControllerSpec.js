"use strict";

describe('TasksController', function () {
  var $scope, $rootScope, createController, TaskService, $httpBackend;

  beforeEach(module('trApp'));

  beforeEach(inject(function($injector) {
    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    TaskService = $injector.get('TaskService');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('TasksController', {
        $scope: $scope,
        TaskService: TaskService
      });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('Should have a viewTask() method on the scope', function () {
    createController();
    expect($scope.viewTask).to.be.a('function');
  });

});

// "use strict";

// describe('LinksController', function () {
//   var $scope, $rootScope, createController, Links, $httpBackend;

//   // using angular mocks, we can inject the injector
//   // to retrieve our dependencies
//   beforeEach(module('shortly'));
//   beforeEach(inject(function($injector) {

//     // mock out our dependencies
//     $rootScope = $injector.get('$rootScope');
//     $httpBackend = $injector.get('$httpBackend');
//     Links = $injector.get('Links');
//     $scope = $rootScope.$new();

//     var $controller = $injector.get('$controller');

//     createController = function () {
//       return $controller('LinksController', {
//         $scope: $scope,
//         Links: Links
//       });
//     };
//   }));

//   it('should have a data property on the $scope', function() {
//     createController();
//     expect($scope.data).to.be.an('object');
//   });

//   it('should have a getLinks method on the $scope', function () {
//     createController();
//     expect($scope.getLinks).to.be.a('function');
//   });
//   it('should call getLinks() when controller is loaded', function () {
//     var mockLinks = [{},{},{}];
//     $httpBackend.expectGET("/api/links").respond(mockLinks);
//     createController();
//     $httpBackend.flush();
//     expect($scope.data.links).to.eql(mockLinks);
//   });
// });
