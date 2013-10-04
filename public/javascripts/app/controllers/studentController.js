meanBoilerplate.controller("StudentController",function ($scope,$http){

    $scope.loadData = function (){
        // calling to server
        // this url can be found in route/index.js
        console.log("test");
        $http.get('/students').success(function(data, status, headers, config) {
            console.log("test");
            $scope.items = data;
            console.log(data);
        });
    }
});