//test app.js
angular.module('inventory', ['ui.router'])
.config(['$locationProvider','$urlRouterProvider','$stateProvider',function ($locationProvider,$urlRouterProvider,$stateProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	$urlRouterProvider.otherwise("/home");

	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/components/home/home.html"
    })
    .state('shows', {
      url: "/shows",
      templateUrl: "app/components/shows/shows.html"
    })
    .state('anime', {
      url: "/anime",
      templateUrl: "app/components/anime/anime.html"
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