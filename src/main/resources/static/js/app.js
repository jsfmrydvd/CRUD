var app = angular.module('crud',[]);
app.config(['$provide', '$httpProvider', '$interpolateProvider', function($provide, $httpProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);

