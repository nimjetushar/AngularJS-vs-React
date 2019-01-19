angular.module('benchmark', [])
    .controller('benchmarkCtrl', function ($scope) {
        var list = [];
        for (var i = 0; i < 2000; i++) {
            list.push("test");
        }
        $scope.list = list;
    })