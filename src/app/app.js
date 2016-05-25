//test app.js
angular.module('inventory', [])
.config(['$locationProvider',function ($locationProvider){
	$locationProvider.html5Mode(true);

}])
.controller('mainController',["$scope", function(){
	var mainController = this;
	mainController.bodyMsg = "test";
}]);