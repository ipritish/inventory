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

	$scope.running = false;

	function correctNonPrintable(val){
		return val;
	}


	function checkDataIntegrity(rating,season,episodes,my_rating){
		return (!isNaN(rating) && !isNaN(season) && !isNaN(episodes) && !isNaN(my_rating));
	}

	$scope.addShow = function(){

		if ($scope.name !== undefined && $scope.air_day !== undefined && $scope.season !== undefined && $scope.episodes !== undefined
			&& $scope.rating !== undefined && $scope.my_rating !== undefined)
		{
			if (checkDataIntegrity($scope.rating,$scope.season,$scope.episodes,$scope.my_rating)) {
				var data = {};
				data.name = correctNonPrintable($scope.name);
				data.rating = +$scope.rating;
				data.season = +$scope.season;
				data.episodes = +$scope.episodes;
				data.running = $scope.running;
				data.air_day = correctNonPrintable($scope.air_day);
				data.my_rating = +$scope.my_rating;
				console.log(data);
			}
			else{
				console.log("Entries not valid");
			}
		}
		else
		{
			console.log("All Entries are not filled");
		}

		$state.go("shows");
	};

	$scope.cancel = function(){
		$state.go("shows");
	};
	
	
}]);