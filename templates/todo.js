
var todoApp = angular.module('todoApp', []);
todoApp.controller('todoListCtrl', function($scope, $http, $compile) {
    $http.get('http://127.0.0.1:5000/getdata').then(function(data, status, headers, config) {
        $scope.tasks = data.data;
    });
    
    $scope.getChildData = function(id) {
        if (!$scope.opened) {
            $http.get('http://127.0.0.1:5000/getdata/'+id).then(function(data, status, headers, config) {
                $scope.subtasks = data.data;
                if ($scope.opened==undefined) {
                    s = angular.element('<div class="media" ng-repeat="subtask in subtasks">\
                        {{subtask.text}}\
                        <span\
                            class="glyphicon glyphicon-chevron-down"\
                            aria-hidden="true"\
                            ng-click="getChildData(subtask.id)">\
                        </span>\
                        <div id="list{{ subtask.id }}" ng-show="opened"></div>\
                    </div>');
                    console.log('#list'+id);
                    angular.element(document.querySelector('#list'+id)).append(s);
                    var $div = $compile(s)($scope);
                }
                $scope.opened = !$scope.opened;
            });
        }
        else {
            $scope.subtaskList = null;
            $scope.opened = !$scope.opened;
        }
    };
});