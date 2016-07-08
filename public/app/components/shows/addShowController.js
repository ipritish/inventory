angular.module('inventory')
.controller('addShowContoller',["$http","$state","$scope",'paginationFilter',function($http,$state,$scope,paginationFilter)
{
	
	var addShowContoller = this;

	$scope.addShow = function(){
		$state.go("shows");
	};

	$scope.cancel = function(){
		$state.go("shows");
	};
	
	
}]);