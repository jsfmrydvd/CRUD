var app = angular.module('crud',[]);
app.config(['$provide', '$httpProvider', '$interpolateProvider', function($provide, $httpProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);
app.directive('loading', ['$http', function ($http) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (value) {
                if (value) {
                    if(element[0].id == "cover-spin") {
                        element.addClass('reverseFade');
                    } else {
                        element.removeClass('ng-hide');
                    }
                } else {
                    if(element[0].id == "cover-spin") {
                        element.removeClass('reverseFade');
                    } else {
                        element.addClass('ng-hide');
                    }
                }
            });
        }
    };
}]);

