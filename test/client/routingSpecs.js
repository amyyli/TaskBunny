describe('Routing', function () {
  var $route;
  beforeEach(module('trApp'));

  beforeEach(inject(function($injector){
    $route = $injector.get('$route');
  }));

  it('Should have / route, template, and controller', function () {
    expect($route.routes['/']).to.be.ok;
    expect($route.routes['/'].controller).to.equal('LandingPageController');
    expect($route.routes['/'].templateUrl).to.equal('app/components/landing/landing.html');
  });

  it('Should have /sign-in route, template, and controller', function () {
    expect($route.routes['/sign-in']).to.be.ok;
    expect($route.routes['/sign-in'].controller).to.equal('SignInPageController');
    expect($route.routes['/sign-in'].templateUrl).to.equal('app/components/sign-in/sign-in.html');
  });

  it('Should have /create-task route, template, and controller', function () {
    expect($route.routes['/create-task']).to.be.ok;
    expect($route.routes['/create-task'].controller).to.equal('TaskFormController');
    expect($route.routes['/create-task'].templateUrl).to.equal('app/components/taskNew/task-form.html');
  });

  it('Should have /tasks route, template, and controller', function () {
    expect($route.routes['/tasks']).to.be.ok;
    expect($route.routes['/tasks'].controller).to.equal('TasksController');
    expect($route.routes['/tasks'].templateUrl).to.equal('app/components/myTasks/tasks.html');
  });

  it('Should have /search route, template, and controller', function () {
    expect($route.routes['/search']).to.be.ok;
    expect($route.routes['/search'].controller).to.equal('TaskSearchController');
    expect($route.routes['/search'].templateUrl).to.equal('app/components/taskSearch/taskSearch.html');
  });

  it('Should have /settings route, template, and controller', function () {
    expect($route.routes['/settings']).to.be.ok;
    expect($route.routes['/settings'].controller).to.equal('SettingsController');
    expect($route.routes['/settings'].templateUrl).to.equal('app/components/userSettings/template.html');
  });
});