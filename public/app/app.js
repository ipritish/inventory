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
		url: "/anime/add",
		templateUrl: "app/components/anime/addAnime.html"
	})
	.state('editAnime', {
		url: "/anime/edit",
		templateUrl: "app/components/anime/editAnime.html"
	})
	.state('addShow', {
		url: "/show/add",
		templateUrl: "app/components/shows/addShow.html"
	})
	.state('editShow', {
		url: "/show/edit",
		templateUrl: "app/components/shows/editShow.html"
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