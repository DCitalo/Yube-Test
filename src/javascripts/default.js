var app = angular.module('YubeApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
    	var i;
    	for (i = 0; i < response.data.length; 