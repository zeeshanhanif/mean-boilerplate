var meanBoilerplate = angular.module("meanBoilerplate",[]);

meanBoilerplate.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/app.html',
            controller: 'AppController'
        })
        .when('/students', {
            templateUrl: 'partials/students.html',
            controller: 'StudentController'
        });

}]);

