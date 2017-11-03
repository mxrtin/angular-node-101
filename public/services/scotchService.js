angular.module('todoService', [])

// super simple service
// each function returns a promise object
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });

services.factory('productService', ['$http',
    function($http){
        var urlBase = 'services';
        var dataFactory = {};
        dataFactory.query = function () {
            return $http.get(urlBase);
        };

        return dataFactory;
    }]);