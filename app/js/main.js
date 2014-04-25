/**
 * Created by may on 2014/4/24.
 */
define(['angular','uiBootstrap'],function (angular) {
    var blog = angular.module('mayApp',['ui.bootstrap']);
    blog.controller('NavController',['$scope',function($scope){
        $scope.radioModel = 'Home';
        console.log($scope.liModel)
    }])

    /*blog.controller('AlertDemoCtrl',['$scope',function($scope){
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: "Another alert!"});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }]);*/
    return {
        init : function(){
            angular.bootstrap(document,['mayApp']);
        }
    }
})