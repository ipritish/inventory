//test app.js
angular.module('inventory', ['ui.router'])
.config(['$locationProvider',function ($locationProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}])
.controller('mainController',["$scope", function($scope){
	var mainController = this;
	mainController.bodyMsg = "test";
}]);