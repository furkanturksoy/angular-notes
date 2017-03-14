// we can use method chaining to define a controller

var myApp = angular
            .module("moduleName", [])
            .controller("helloController",function($scope){
                var country = {
                    name: "USA",
                    country: "washington",
                    flag: "/images/flag.png"
                }

                $scope.country = country;
            });

// then we need to reference it in the view 