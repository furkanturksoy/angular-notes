var app = angular
        .module("IncrementingApp", [])
        .controller("Technologies",function($scope){

            var techs = [
                {tech : "javascript ", likes: 0, dislikes : 0},
                {tech : "javascript ", likes: 0, dislikes : 0},
                {tech : "javascript ", likes: 0, dislikes : 0},
                {tech : "javascript ", likes: 0, dislikes : 0}

                
            ]

            $scope.technologies = techs;
            $scope.incrementLikes = function(technology){
                technology.likes++
            }
            $scope.incrementDislikes = function(technology){
                technology.dislikes++
            }
        })