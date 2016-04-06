var mainApp = angular.module('ngGGMate', ['ngRoute' , 'ngAnimate']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/home.html',
    })
    .when('/about', {
        templateUrl: '/templates/about.html',
        controller: 'aboutCtrl'
    })
    .when('/games', {
        templateUrl: '/templates/games.html',
        controller: 'gamesListCtrl'
    })
    .when('/companies', {
        templateUrl: '/templates/companies.html',
        controller: 'companiesListCtrl'
    })
    .when('/people', {
        templateUrl: '/templates/people.html'
    })
    .when('/company', {
        templateUrl: '/templates/company.html',
        controller: 'companyCtrl'
    })
    .when('/game', {
        templateUrl: '/templates/game.html',
        controller: 'gameCtrl'
    })
    .when('/person', {
        templateUrl: '/templates/person.html',
        controller: 'personCtrl'
    })
    .otherwise({
        templateUrl: '/templates/home.html'
    })
}]);

mainApp.controller('companyCtrl', function($scope) {
    $scope.companyName = "Bungie";
    $scope.description = "This is where game description goes";
    $scope.headquarters = "This is where headquarters goes";
    $scope.founded = "This is where date founded goes";
    $scope.website = "http://ggmate.me"
    $scope.highestRated = "Highest Rated Game goes here";
    $scope.metaRating = "Metacritic rating for company";
    $scope.relatedPeople = ["Daryl Brigner", "Lani Minella",
                            "Roger L. Jackson", "Mark Jones"];
    $scope.games = ["Halo"];
    $scope.imageLink = "http://static.giantbomb.com/uploads/scale_large/1/12139/2754841-bgs.jpg";
});

mainApp.controller('gameCtrl', function($scope) {
    $scope.imageLink = "http://static.giantbomb.com/uploads/scale_large/8/82063/2558592-daoclean.jpg";
    $scope.description = "This is where game descriptions go";
    $scope.rating = "This is where the game rating goes";
    $scope.platforms = "This is where the game platforms goes";
    $scope.developer = "This is where the game's developers goes";
    $scope.publisher = "This is where the game's publisher goes";
    $scope.people = ["Person1", "Person2", "Person3"];
    $scope.video = "https://www.youtube.com/embed/GE2BkLqMef4"
});

mainApp.controller('personCtrl', function($scope) {
    $scope.personName = "Peron's name goes here";
    $scope.description = "Person description goes here";
    $scope.firstGame = "Person's first credited game";
    $scope.birthDate = "Person's Birthdate";
    $scope.games = ["game1", "game2", "game3", "game4"];
});

mainApp.controller('companiesListCtrl', function($scope) {
    $scope.companies = [{name: "Bethesda", founded: "November 10, 2015", develop: "8", publisher: "1", country: "United States"}, {name: "Bethesda", founded: "November 10, 2015", develop: "8", publisher: "1", country: "United States"} ];
});

mainApp.controller('gamesListCtrl', function($scope) {
    $scope.games = [{}]
});

mainApp.controller('peopleListCtrl', function($scope) {

});



mainApp.controller('aboutCtrl', function($scope, $http) {

    $scope.runTests = function() {
        $scope.showTestsOutput = true;
        $scope.testOutput = '\nRunning Tests ... '
        $http.get('/run_unittests').then(function(result){
            $scope.finished = true;
            $scope.testOutput = '\n' + result.data.output;
        });
    }

});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
