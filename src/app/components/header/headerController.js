angular.module('inventory')
.controller('headerController',['$state','$scope', function($state,$scope) 
{

	var homeController = this;
	homeController.title = "Inventory";
	
}]);
