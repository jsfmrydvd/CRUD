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
    //delete
    $scope.delete = function(user) {
        $scope.userForm = user;
        var data = $scope.userForm;
        $http.post("/api/user/delete", data)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        location.reload();
                    } else {
                        // location.reload();
                    }
                } catch(e) {
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };
    //active
    $scope.active = function(user) {
        $scope.userForm = user;
        var data = $scope.userForm;
        $http.post("/api/user/active", data)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        location.reload();
                    } else {
                    }
                } catch(e) {
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };
    $http.get('/api/user/list')
        .then(function(response) {
            console.log(response);
            $scope.userList = response.data.userList;
            $scope.userLists = response.data.userLists;
            $scope.show = false;
            $scope.showSearch = false;
            console.log($scope.userList);
        }, function(error) {
            console.log(error);
        });
    //show
    $scope.getActive = function() {
        $http.get('/api/user/list')
            .then(function(response) {
                console.log(response);
                $scope.userList = response.data.userList;
                $scope.show = true;
                $scope.showSearch = false;
                $scope.status = "ACTIVE";
                delete $scope.userLists;
                console.log($scope.userList);
            }, function(error) {
                console.log(error);
            });
    };
    $scope.getDeleted = function() {
        $http.get('/api/user/list')
            .then(function(response) {
                console.log(response);
                $scope.userLists = response.data.userLists;
                $scope.show = true;
                $scope.showSearch = false;
                $scope.status = "DELETED";
                delete $scope.userList;
                console.log($scope.userList);
            }, function(error) {
                console.log(error);
            });
    };
    $scope.searchDetails = function() {
        $scope.show = true;
        $scope.showSearch = true;
        $http.get('/api/user/list')
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        $scope.userList = response.data.userList;
                        $scope.userLists = response.data.userLists;
                        $scope.status = "ALL";
                    } else {
                        delete $scope.userList;
                        delete $scope.userLists;
                        $scope.invalidCredentials = data.message;
                    }
                } catch(e) {
                    console.log(response);
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };
    $scope.updateModal = function(user) {
        $scope.usersForm = user;
        var data = $scope.usersForm;
        $http.post("/api/user/update", data)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        $scope.usersForm.name = response.data.name;
                        $scope.studentNumber = response.data.studentNumber;
                        $scope.usersForm.studentNumber = parseInt($scope.studentNumber);
                        $scope.age = response.data.age;
                        $scope.usersForm.age = parseInt($scope.age);
                        $scope.mobile = response.data.mobile;
                        $scope.usersForm.mobile = parseInt($scope.mobile);
                        $scope.usersForm.email = response.data.email;
                    } else {
                    }
                } catch(e) {
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    };
    $scope.editDetails = function() {
        var data = $scope.usersForm;
        $http.post("/api/user/edit", data)
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
    //search

    $scope.searchUser= function() {
        var data = $scope.Form;
        var config = {};
        console.log(data);
        $http.post("/api/user/search", data, config)
            .then(function(response) {
                try {
                    console.log(response);
                    var data = response.data;
                    console.log(response);
                    if(data.success) {
                        $scope.userList = response.data.userList;
                        delete $scope.userLists;
                    } else {
                        delete $scope.userList;
                    }
                } catch(e) {
                    console.log(response);
                    console.log(e);
                    alert("something went wrong, please try again");
                }
            }, function(error) {
                console.log(error);
            });
    }
}]);