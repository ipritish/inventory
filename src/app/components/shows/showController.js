angular.module('inventory')
.controller('showContoller',["$scope",'paginationFilter',function($scope,paginationFilter) {
	
	var showController = this;
	
	$scope.data = {
		availableOptions: [
		  {id: '1', name: '3'},
		  {id: '2', name: '5'},
		  {id: '3', name: '10'}
		],
		selectedOption: {id: '1', name: '3'} //This sets the default value of the select in the ui
	};

	$scope.changedValue = function(item) {
		$scope.curPage = 0;
		$scope.pageSize = +item.name;
	};   
 
	$scope.showData = function(){
		$scope.curPage = 0;
		$scope.pageSize = +$scope.data.selectedOption.name;
		$scope.datalists = [
			{ "name": "John","age":"16","designation":"Software Engineer1"},
			{"name": "John2","age":"21","designation":"Software Engineer2"},
			{"name": "John3","age":"19","designation":"Software Engineer3"},
			{"name": "John4","age":"17","designation":"Software Engineer4"},
			{"name": "John5","age":"21","designation":"Software Engineer5"},
			{"name": "John6","age":"31","designation":"Software Engineer6"},
			{"name": "John7","age":"41","designation":"Software Engineer7"},
			{"name": "John8","age":"16","designation":"Software Engineer8"},
			{"name": "John18","age":"16","designation":"Software Engineer9"},
			{"name": "John28","age":"16","designation":"Software Engineer10"},
			{"name": "John38","age":"16","designation":"Software Engineer11"},
			{"name": "John48","age":"16","designation":"Software Engineer12"},
			{"name": "John58","age":"16","designation":"Software Engineer13"},
			{"name": "John68","age":"16","designation":"Software Engineer14"},
			{"name": "John68","age":"16","designation":"Software Engineer15"}
		]
		$scope.numberOfPages = function() {
				return Math.ceil($scope.datalists.length / $scope.pageSize);
		};
		$scope.isFirstPage = function(){
			return $scope.curPage === 0;
		};
		$scope.isLastPage = function() {
			return $scope.curPage >= $scope.datalists.length/$scope.pageSize - 1;
		};
		$scope.reduceCurrentPage = function(){
			$scope.curPage = $scope.curPage - 1;
		};
		$scope.increaseCurrentPage = function(){
			$scope.curPage = $scope.curPage + 1;
		};
         
	}
}]);

angular.module('inventory').filter('pagination', function()
{
	return function(input, start)
	{
		start = +start;
		return input.slice(start);
	};
});

 