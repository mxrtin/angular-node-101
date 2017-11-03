myapp.directive('product', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/product/productView.html',
        scope: {"model": "="}
    };
});