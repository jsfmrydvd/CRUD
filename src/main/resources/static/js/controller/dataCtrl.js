app.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
    //save or create
    $scope.save = function() {
        var data = $scope.userForm;
        $http.post("/api/user/save", data)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        location.reload();
                    } else {
                        $scope.errorNull = "Student Number taken!";
                        $scope.errorStyle = {
                            "color" : "red",
                            "font-weight" : "bolder"
                        }
                    }
                } catch(e) {
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };

    // $http.get('/api/user/list')
    //     .then(function(response) {
    //         console.log(response);
    //         $scope.userList = response.data.userList;
    //         $scope.userLists = response.data.userLists;
    //         $scope.show = false;
    //         $scope.showSearch = false;
    //         console.log($scope.userList);
    //     }, function(error) {
    //         console.log(error);
    //     });

}]);