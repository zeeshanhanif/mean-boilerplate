meanBoilerplate.controller("AppController",function ($scope,$location){

    $scope.takeTest = function (){
        $location.path("/students");
    };
    $scope.giveTest = function (){
        alert("Give test");
    }
});