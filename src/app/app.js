//test app.js
angular.module('inventory', ['ui.router'])
.config(['$locationProvider',function ($locationProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}])
.controller('mainController',["$scope", "$http", function($scope,$http){
	var mainController = this;
	//mainController.bodyMsg = "test";
	$http.get("/test")
    .then(function(response) {
        mainController.bodyMsg = response.data;
    });
	
	mainController.clickMe = function(){
		$http.get("/resulttest")
		.then(function(response) {
			console.log(response);
			mainController.bodyMsg = response.data;
		});
		console.log("it's here");
	};
}]);