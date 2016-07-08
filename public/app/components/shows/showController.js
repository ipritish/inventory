angular.module('inventory')
.controller('showContoller',["$http","$state","$scope",'paginationFilter',function($http,$state,$scope,paginationFilter) {

		var showController = this;
		$scope.datalists = [];

		$scope.data = {
			availableOptions: [
			  {id: '1', name: '3'},
			  {id: '2', name: '5'},
			  {id: '3', name: '10'}
			],
			selectedOption: {id: '1', name: '3'} //This sets the default value of the select in the ui
		};

		$scope.headers = [{"title": "Name"},{"title": "Rating"},{"title": "Season"},{"title": "Episodes"},
						  {"title": "On Air"},{"title": "Air Day"},{"title": "My Rating"}];

		$scope.test = (91/$scope.headers.length);

		$scope.changedValue = function(item) {
			$scope.curPage = 0;
			$scope.pageSize = +item.name;
		};

		$scope.home = function(){
			$state.go("home");
		};

		$scope.addNewShow = function(){
			$state.go("addShow");
		};

		$scope.showData = function(){
			$scope.curPage = 0;
			$scope.pageSize = +$scope.data.selectedOption.name;
			$http.get("/getshows").then(function(response){
				console.log(response.data);
				$scope.datalists = response.data;
			});
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



