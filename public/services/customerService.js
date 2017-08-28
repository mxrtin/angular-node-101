//Create
/*services.factory('customerService', ['$http',
    function($http) {
        return function (name, login, password) {
            return {
                name: name,
                login: login,
                password: password
            }
        };
    }]);
*/


services.factory('customerService', ['$http',
    function($http){
        var urlBase = 'services';
        var dataFactory = {};
        dataFactory.query = function () {
            return $http.get(urlBase);
        };


        return dataFactory;
    }]);


/*
services.factory('customerService', ['$http',
    function($http){
        var baseUrl = "services";

        return {
            create: function(data, success, error) {
                $http.post(baseUrl, data).success(success).error(error)
            },

            get: function(success, error) {
                $http.get(baseUrl).success(success).error(error)
            }
        };
    }]);
*/