var controllers = angular.module('controllers', []);
var services = angular.module('services', []);
var directives = angular.module('directives',[]);

var myapp = angular.module('myapp', ['ui.router','controllers', 'services', 'directives']);

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/routes/home.html'
        })
        .state('about', {
            url: '/routes/about',
            templateUrl: '/routes/about.html'
        })
        .state('product', {
            url: '/routes/product',
            templateUrl: '/routes/product.html',
            controller: 'productController'
        })
        .state('scotch', {
            url: '/routes/scotch',
            templateUrl: '/routes/scotch.html',
            controller: 'scotchController'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        .state('about1', {
            url: '/routes/about1',
            views: {
                '': { templateUrl: 'about1.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

}).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);