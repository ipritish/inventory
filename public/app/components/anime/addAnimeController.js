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

	$scope.running = false;

	$scope.addAnime = function(){
		var data = {};

		if ($scope.name !== undefined && $scope.air_day !== undefined && $scope.season !== undefined && $scope.episodes !== undefined
		    && $scope.rating !== undefined && $scope.my_rating !== undefined)
		{
			var data = {};
			data.name = $scope.name;
			data.rating = $scope.rating;
			data.season = $scope.season;
			data.episodes = $scope.episodes;
			data.running = $scope.running;
			data.air_day = $scope.air_day;
			data.my_rating = $scope.my_rating;
			console.log(data);
		}
		else
		{
			console.log("All Entries are not filled");
		}
		//$state.go("anime");
		/*$http.post("/addanime",data).then(function(response){
			console.log(response.data);
			$scope.datalists = response.data;
		});*/
		$state.go("anime");
	};

	$scope.cancel = function(){
		$state.go("anime");
	};

}]);