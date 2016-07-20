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

		function correctNonPrintable(val){
			return val;
		}

		function isInt(n){
			return n === +n && n === (n|0);
		}

		function isFloat(n){
			return n === +n && n !== (n|0);
		}

		function checkDataIntegrity(rating,season,episodes,my_rating){
			return (!isNaN(rating) && !isNaN(season) && !isNaN(episodes) && !isNaN(my_rating));
		}


		if ($scope.name !== undefined && $scope.air_day !== undefined && $scope.season !== undefined && $scope.episodes !== undefined
		    && $scope.rating !== undefined && $scope.my_rating !== undefined)
		{
			if (checkDataIntegrity($scope.rating,$scope.season,$scope.episodes,$scope.my_rating)) {
				if (isInt(+$scope.season)&&isInt(+$scope.episodes)) {
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
					if (!isInt(+$scope.season)){
						console.log("Season should be Integer");
					}
					else{
						console.log("Episodes should be Integer");
					}
				}
			}
			else{
				if (isNaN($scope.rating)){
					console.log("Rating is not a Number");
				}
				else if (isNaN($scope.season)){
					console.log("Season is no a Number");
				}
				else if (isNaN($scope.episodes)){
					console.log("Episodes is not a Number");
				}
				else {
					console.log("My Rating is no a number");
				}
			}
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