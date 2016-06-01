angular.module("inventory").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/header/header.html","<div class=\"row\" ng-controller=\"headerController as headerCtrl\">\r\n<h1 class=\"row page-header\">\r\n	<p class=\"text-center\" ng-bind=\"headerCtrl.title\"></p>\r\n</h1>\r\n</div>");
$templateCache.put("app/components/anime/anime.html","<div>anime</div>");
$templateCache.put("app/components/home/home.html","<div id=\"home\" ng-controller=\"homeController as homeCtrl\">\r\n<div class=\"row\" style=\"margin-top:3%\">\r\n	<div class=\"col-xs-1\">\r\n	</div>\r\n	<div class=\"col-xs-5 text-center\">\r\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\r\n	</div>\r\n	<div class=\"col-xs-5 text-center\">\r\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\r\n	</div>\r\n	<div class=\"col-xs-1\">\r\n	</div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-top:3%\">\r\n	<div class=\"col-xs-1\">\r\n	</div>\r\n	<div class=\"col-xs-5 text-center\">\r\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\r\n	</div>\r\n	<div class=\"col-xs-5 text-center\">\r\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\r\n	</div>\r\n	<div class=\"col-xs-1\">\r\n	</div>\r\n</div>\r\n\r\n</div>");
$templateCache.put("app/components/shows/shows.html","<div ng-controller=\"showContoller\" ng-init=\"showData()\">\r\n	\r\n	<select name=\"mySelect\" id=\"mySelect\" ng-options=\"option.name for option in data.availableOptions track by option.id\" \r\n		ng-change=\"changedValue(data.selectedOption)\" ng-model=\"data.selectedOption\">\r\n	</select>\r\n	<table class=\"table table-bordered\">\r\n		<tr>\r\n			<th style=\"width:33%; text-align:center;\"><span>Name</span></td>\r\n			<th style=\"width:33%; text-align:center;\"><span>Age</span></td>\r\n			<th style=\"width:33%; text-align:center;\"><span>Designation</span></td>\r\n		</tr>\r\n		<tr ng-repeat=\"datalist in datalists | pagination: curPage * pageSize | limitTo: pageSize\">\r\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.name }} </span></td>\r\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.age }}</span></td>\r\n			<td style=\"width:33%; text-align:center;\"><span>{{ datalist.designation }}</span></td> \r\n		</tr>\r\n	</table> \r\n        \r\n    <div class=\"row\" ng-show=\"datalists.length\">\r\n		<div class=\"col-xs-4 text-center\">\r\n		</div>\r\n		<div class=\"col-xs-4 text-center\">\r\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isFirstPage()\" ng-click=\"reduceCurrentPage()\"> &lt; PREV</button>\r\n			<span>Page {{curPage + 1}} of {{ numberOfPages() }}</span>\r\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isLastPage()\" ng-click=\"increaseCurrentPage()\">NEXT &gt;</button>\r\n		</div>\r\n		<div class=\"col-xs-4 text-center\">\r\n		</div>\r\n	</div>\r\n</div>\r\n");}]);