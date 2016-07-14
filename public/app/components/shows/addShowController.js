angular.module('inventory')
.controller('addShowContoller',["$http","$state","$scope",'paginationFilter',function($http,$state,$scope,paginationFilter)
{
	
	var addShowContoller = this;

	$scope.title = "Add Entry";

	$scope.namelabel = "Show Name";

	$scope.ratinglabel = "IMDB Rating";

	$scope.seasonlabel = "No. of seasons";

	$scope.episodeslabel = "No. of Episodes";

	$scope.air_daylabel = "Air Day";

	$scope.my_ratinglabel = "My Rating";

	$scope.is_runninglabel = "On Air";

	$scope.addShow = function(){
		$state.go("shows");
	};

	$scope.cancel = function(){
		$state.go("shows");
	};
	
	
}]);