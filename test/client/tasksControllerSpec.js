"use strict";

describe('TasksController', function () {
  var 
  $scope, $rootScope, $location, 
  createController, TaskService, 
  $httpBackend, q, sandbox;

  beforeEach(module('trApp'));

  beforeEach(inject(function($injector) {
    // mock out our dependencies
    sandbox = sinon.sandbox.create();
    q = $injector.get('$q');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    $location = $injector.get('$location');
    TaskService = $injector.get('TaskService');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('TasksController', {
        $scope: $scope,
        $location: $location, 
        TaskService: TaskService
      });
    };

    $httpBackend.whenGET("/api/mytasks").respond({ hello: 'World' });
    createController();
  }));

  afterEach(function () {
    sandbox.restore();
  //   $httpBackend.verifyNoOutstandingExpectation();
  //   $httpBackend.verifyNoOutstandingRequest();
  });

  it('Should make a get request to /api/mytasks', function () {
    $httpBackend.expectGET('/api/mytasks').respond(200, '');
  });

  it('Should have a viewTask() method on the scope', function () {
    expect($scope.viewTask).to.be.a('function');
  });

  it('Should have tasks', function (done) {
    TaskService.retrieveUserTasks();
    console.log($scope);

    done();
    // expect(TaskService.retrieveUserTasks())
    // sandbox.stub(TaskService, 'retrieveUserTasks');

  });
  
});
