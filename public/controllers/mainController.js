controllers.controller('mainController', function($scope, productService) {

    $scope.getProducts = function() {
        $scope.data = [];
        var request = productService.query();
        request.success(function(data) {
            $scope.products = data;
        });
        request.error(function(data){
            console.log('Error: ' + data);
        });
    }
});
