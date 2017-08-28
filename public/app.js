var controllers = angular.module('controllers', []);
var services = angular.module('services', []);
var directives = angular.module('directives',[]);

var myapp = angular.module('myapp', ['ngRoute','controllers', 'services', 'directives']);

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'mainController'
    }).otherwise({
        redirectTo: '/'
    });

}]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);