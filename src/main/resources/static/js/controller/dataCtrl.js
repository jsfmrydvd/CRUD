app.controller('DataCtrl', ['$scope', '$http', function($scope, $http) {
    //save or create
    $scope.check = function() {
        console.log("1");
        var data = $scope.dataForm;
        $http.post("/api/data/check", data)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    if(data.success) {
                        $scope.results = data.result;
                        var dataResult = JSON.parse($scope.results);
                        var errorResult = dataResult.error;
                        var fakeResult = dataResult.fake;
                        $scope.displayLogo = true;
                        if(fakeResult === false) {
                            $scope.backgroundColor = {
                                "background-color" : "rgb(38, 75, 46)"
                            };
                            fakeResult = "REAL! This article has a reliable information.";
                            $scope.boxObj = {
                                "display" : "block",
                                "background-color" : "#28a745"
                            };
                            $scope.imageLegit = "/image/ICPEP-L.png";
                        } else if(fakeResult === true) {
                            $scope.backgroundColor = {
                                "background-color" : "rgb(100, 35, 35)"
                            };
                            fakeResult = "FAKE! This article has an unreliable information.";
                            $scope.boxObj = {
                                "display" : "block",
                                "background-color" : "#dc3545"
                            };
                            $scope.imageLegit = "/image/ICPEP-F.png";
                        } else if (errorResult === true) {
                            $scope.backgroundColor = {
                                "background-color" : "#212121"
                            };
                            fakeResult = "ERROR! Please enter a valid url.";
                            $scope.boxObj = {
                                "display" : "block",
                                "background-color" : "black",
                                "color" : "white"
                            };
                            $scope.imageLegit = "/image/ICPEP-E.png";
                        }
                        $scope.fakeRes = fakeResult;
                        delete $scope.errorText;
                    } else {
                        // $scope.backgroundColor = {
                        //     "background-color" : "#212121"
                        // };
                        $scope.boxObj = {
                            "display" : "none"
                        };
                        delete $scope.fakeRes;
                        $scope.errorText = "Error please try again!"
                    }
                } catch(e) {
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };
}]);