// we can use method chaining to define a controller

var myApp = angular
            .module("moduleName", [])
            .controller("helloController",function($scope){

                $scope.country = "country";
            });

// then we need to reference it in the view 