angular.module('inventory')
.controller('addAnimeContoller',["$http","$state","$scope",'paginationFilter',function($http,$state,$scope,paginationFilter)
{

	var addAnimeContoller = this;

	$scope.addAnime = function(){
		$state.go("anime");
	};

	$scope.cancel = function(){
		$state.go("anime");
	};

}]);