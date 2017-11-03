controllers.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

    $scope.guardarCliente = function() {
        $http({
            method: 'POST',
            url: '/guardar',
            params: {
                nombre: $scope.nombre,
                apellido: $scope.apellido,
                domicilio: $scope.domicilio,
                telefono: $scope.telefono,
                email: $scope.email,
                _id: $scope._id
            }
        }).
        success(function(data) {
            if(typeof(data) == 'object'){
                $scope.limpiarDatos();
                $scope.cargarClientes();
            }else{
                alert('Error al intentar guardar el cliente.');
            }
        }).
        error(function() {
            alert('Error al intentar guardar el cliente.');
        });
    }

    $scope.createScotch = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


});