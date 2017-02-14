// this is foe the angular module
var app=angular.module('myClock',[]);
app.controller("myCtrl",main);
function main($scope){
    $scope.userName="suchana shrestha";
    $scope.userDate="02/12/2017";
    $scope.booleanValue="true";
    $scope.radioValue="one";
}