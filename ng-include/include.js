var app = angular
    .module("include", [])
    .controller("includeController",function(){
         var employees = [
            {name: "ben", dateofbirth: new Date("November, 13, 1975"), gender:"Male", salary: 55000 },
            {name: "july", dateofbirth: new Date("November, 15, 1968"), gender:"Female", salary: 52800 },
            {name: "ahmet", dateofbirth: new Date("November, 18, 1978"), gender:"Male", salary: 53555 },
            {name: "mehmet", dateofbirth: new Date("November, 22, 1952"), gender:"Female", salary: 18000 },
            {name: "mustafa", dateofbirth: new Date("November, 27, 1942"), gender:"Male", salary: 5504500 }
        ];

        $scope.employees = employees;

    })