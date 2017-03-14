var App = angular
    .module("anchor", [])
    .controller("anchorController", function($scope, $location, $anchorScroll){
        $scope.scrollTo = function(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        }
    })