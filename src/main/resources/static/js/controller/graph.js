// app.controller('GraphCtrl', ['$scope', '$http', function($scope, $http) {
//
//     $scope.fieldData = function() {
//        return $http.get("https://api.icndb.com/jokes/random?fbclid=IwAR3Lh5-C-HNItAC0KM5rpGoAwHYMBED6-fDZ3oMg68hoey2IH5N_Eo-ZB9E")
//             .then(function (response) {
//                return $scope.init(response);
//             });
//     };
//
//     $scope.init = function(rs) {
//         // $scope.results = rs.data.value.id;
//         // var dataResult = JSON.parse($scope.results);
//         var dField = rs.data.value.id;
//         return dField;
//     };
//
//    $http.get("https://api.icndb.com/jokes/random?fbclid=IwAR3Lh5-C-HNItAC0KM5rpGoAwHYMBED6-fDZ3oMg68hoey2IH5N_Eo-ZB9E")
//        .then(function (response) {
//
//            try {
//                // if (response.data.success) {
//                    var field = $scope.init(response);
//                    var time = new Date({hours12: true});
//                    var data = [{
//                        x: [time],
//                        y: [field],
//                        mode: 'lines',
//                        line: {color: '#80CAF6'}
//                    }];
//                    Plotly.plot('graph', data);
//                    var cnt = 0;
//                        var interval = setInterval(function () {
//                            var time = new Date();
//                            var update = {
//                                x: [[time]],
//                                y: [[field]]
//                            };
//                            Plotly.extendTraces('graph', update, [0]);
//                            if (cnt === 100) clearInterval(interval);
//                               $scope.fieldData()
//                                   .then(function (fld) {
//                                    $scope.updatedField = fld;
//                                });
//                            field = $scope.updatedField;
//                        }, 1);
//                // } else {
//                //     alert("something went wrong, please try again");
//                // }
//            } catch (e) {
//                console.log(e);
//                alert("something went wrong, please try again");
//            }
//        }, function (error) {
//            console.log(error);
//        });
// }]);