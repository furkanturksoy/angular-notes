var App = angular.module("routeDemo", ["ngRoute"])
                 .config(function($routeProvider){
                    $routeProvider
                        .when("/home", {
                            templateUrl: "index.html",
                            controller : "homeController"
                        })
                        .when("/about", {
                            templateUrl: "about.html",
                            controller : "aboutController"
                        })
                 }).controller("homeController", function($scope){

                 })