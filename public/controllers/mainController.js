//controllers.controller('contactusController', ['$scope', 'contactFormService', 'statisticsService','securityService',

controllers.controller('mainController', function($scope, customerService) {

    $scope.data = {};
    $scope.payBill = [
        { bill: "Tution", paid:true },
        { bill: "Electricity", paid: false },
        { bill: "Internet", paid: false},
        { bill: "Income Tax", paid: false },
        { bill: "Subway Pass", paid: true },
        { bill: "Library", paid: false }];



    $scope.getCustomers = function() {
        //$scope.customers = customerService.get();
        $scope.data = [];
        var request = customerService.query();//$http.get('/services');
        request.success(function(data) {
            $scope.customers = data;
            $scope.customer = {
                name: data[0].name,
                address: data[0].city
            };
        });
        request.error(function(data){
            console.log('Error: ' + data);
        });
    }

    $scope.createCustomer = function() {
        var user1 =  new customerService('Kate','jhpa','urej2232js');
        console.log(user1.name);
        console.log(user1.login);
        console.log(user1.password);
    }

}).directive('myCustomer', function() {
    return {
        restrict: 'E',
        templateUrl: 'routes/customer.html'
    };
});




/*controllers.controller('IndexController', ['$scope', function($scope) {
    $scope.message = 'Hello From Angular';
    $scope.name = 'bob';
}]);
*/

/*
var app = angular.module('angularjsNodejsTutorial',[]);
app.controller('myController', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/services');
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
});
*/