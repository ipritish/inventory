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
    })
	.state('addAnime', {
		url: "/addAnime",
		templateUrl: "app/components/anime/addAnime.html"
	})
	.state('addShow', {
		url: "/addShow",
		templateUrl: "app/components/shows/addShow.html"
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

angular.module('inventory').filter('pagination', function()
{
	return function(input, start)
	{
		start = +start;
		return input.slice(start);
	};
});