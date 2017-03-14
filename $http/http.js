var app = angular
    .module("ajax", [])
    .controller("ajaxController", function($scope, $http){
        $http.get("url")
        .then(function(response){
            $scope.employees = response.data;
        })
    })

    var app = angular
    .module("ajax", [])
    .controller("ajaxController", function($scope, $http){
        $http({
            method : "Get",
            url : "url"
        }).then(function(response){
            $scope.employees = response.data;
        })
    })


// we can use $log.info(response) method to inspect what is inside of an object 

// we can also call an error callback by passing another function(reason){}