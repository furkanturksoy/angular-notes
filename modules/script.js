
/*creating a module*/
var myApp = angular.module("somemodule",[])

/*creating a controller*/
var myController = function($scope){
    $scope.message = "hello world";
}


// registering the controller to module 
myApp.controller("myController", myController)

// we can also use anonymous function for the controller 