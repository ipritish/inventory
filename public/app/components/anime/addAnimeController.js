angular.module('inventory')
.controller('addAnimeContoller',["$http","$state","$scope",'paginationFilter',function($http,$state,$scope,paginationFilter)
{

	var addAnimeContoller = this;

	$scope.title = "Add Entry";

	$scope.namelabel = "Anime Name";

	$scope.ratinglabel = "MAL Rating";

	$scope.seasonlabel = "No. of seasons";

	$scope.episodeslabel = "No. of Episodes";

	$scope.air_daylabel = "Air Day";

	$scope.my_ratinglabel = "My Rating";

	$scope.is_runninglabel = "On Air";

	$scope.addAnime = function(){
		$state.go("anime");
	};

	$scope.cancel = function(){
		$state.go("anime");
	};

}]);