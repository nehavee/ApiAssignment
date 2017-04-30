app.controller('EmployeesController', function ($scope, employeeService) {
    loadRecords();

        function loadRecords() {
        var promiseGet = employeeService.getEmployees(); 

        promiseGet.then(function (b) { $scope.Employees = b.data },
              function (error) {
                  $log.error('failure loading employees')
              })
    }

})
