angular.module('inventory')
.controller('homeController',['$state','$scope', function($state,$scope) 
{

	var homeController = this;
	
	homeController.fetchShows = function()
	{
		$state.go('shows');
	};
	
	homeController.fetchAnime = function()
	{
		$state.go('anime');
	};

}]);
