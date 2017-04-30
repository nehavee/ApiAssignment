app.service('employeeService', function ($http) {
      this.getEmployees = function () {
        return $http.get("api/Employees");
    }

});
