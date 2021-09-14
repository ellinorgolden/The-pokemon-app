var app = angular.module("pokemonApp", []);

app.controller("siteController",["$scope", "$http",  function ($scope, $http){
    $scope.test="jn";

    $http.get("/pokedex.json").then(function (response){
       $scope.pokemon = response.data.pokemon;

    })


}])