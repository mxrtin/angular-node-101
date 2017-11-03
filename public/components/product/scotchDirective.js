myapp.directive('scotch', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/product/scotchView.html',
        scope: {"model": "="}
    };
});