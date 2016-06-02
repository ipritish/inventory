angular.module("inventory").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/anime/anime.html","<div>anime</div>");
$templateCache.put("app/components/header/header.html","<div class=\"row\" ng-controller=\"headerController as headerCtrl\">\n<h1 class=\"row page-header\">\n	<p class=\"text-center\" ng-bind=\"headerCtrl.title\"></p>\n</h1>\n</div>");
$templateCache.put("app/components/home/home.html","<div id=\"home\" ng-controller=\"homeController as homeCtrl\">\n<div class=\"row\" style=\"margin-top:3%\">\n	<div class=\"col-xs-1\">\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\n	</div>\n	<div class=\"col-xs-1\">\n	</div>\n</div>\n\n<div class=\"row\" style=\"margin-top:3%\">\n	<div class=\"col-xs-1\">\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\n	</div>\n	<div class=\"col-xs-1\">\n	</div>\n</div>\n\n</div>");
$templateCache.put("app/components/shows/shows.html","<div ng-controller=\"showContoller\" ng-init=\"showData()\">\n	\n	<div class=\"row form-group\">\n		<div class=\"col-sm-2\">\n		</div>\n		<div class=\"col-sm-10\">\n			<div style=\"white-space:nowrap\">\n				<p>Show Per Page</p>\n				<select style=\"width: 20%;\" class=\"form-control\" ng-options=\"option.name for option in data.availableOptions track by option.id\" \n					ng-change=\"changedValue(data.selectedOption)\" ng-model=\"data.selectedOption\">\n				</select>\n			</div>\n		</div>\n	</div>\n	<div class= \"row\" style=\"margin-top:2%\">\n	<table class=\"table table-bordered\" >\n		<tr>\n			<th style=\"width:33%; text-align:center;\"><span>Name</span></td>\n			<th style=\"width:33%; text-align:center;\"><span>Age</span></td>\n			<th style=\"width:33%; text-align:center;\"><span>Designation</span></td>\n		</tr>\n		<tr ng-repeat=\"datalist in datalists | pagination: curPage * pageSize | limitTo: pageSize\">\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.name }} </span></td>\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.age }}</span></td>\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.designation }}</span></td> \n		</tr>\n	</table>\n	</div>\n        \n    <div class=\"row\" ng-show=\"datalists.length\">\n		<div class=\"col-xs-4 text-center\">\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isFirstPage()\" ng-click=\"reduceCurrentPage()\"> &lt; PREV</button>\n			<span>Page {{curPage + 1}} of {{ numberOfPages() }}</span>\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isLastPage()\" ng-click=\"increaseCurrentPage()\">NEXT &gt;</button>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n		</div>\n	</div>\n</div>\n");}]);