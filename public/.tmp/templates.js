angular.module("inventory").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/anime/addAnime.html","<div ng-controller=\"addAnimeContoller\">\n	\n	<div class=\"row\" style=\"margin-top:3%\">\n		<div class=\"col-xs-1\">\n		</div>\n		<div class=\"col-xs-5 text-center\">\n			<input ng-model=\"name\" class=\"form-control\" type=\"text\" name=\"name\">\n		</div>\n		<div class=\"col-xs-5 text-center\">\n			<input ng-model=\"rating\" class=\"form-control\" type=\"text\" name=\"name\">\n		</div>\n		<div class=\"col-xs-1\">\n		</div>\n	</div>\n \n</div>\n");
$templateCache.put("app/components/anime/anime.html","<div ng-controller=\"animeContoller\" ng-init=\"showData()\">\n	\n	<div class=\"row\">\n		<div class=\"col-xs-1\">\n		</div>\n		<div class=\"col-xs-4 text-center\" style=\"overflow: hidden;\">\n			<p>Anime Per Page</p>\n			<select class=\"chosen-container\" ng-options=\"option.name for option in data.availableOptions track by option.id\"\n					ng-change=\"changedValue(data.selectedOption)\" ng-model=\"data.selectedOption\">\n			</select>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"addNewAnime()\">Add New Entry</button>\n		</div>\n		<div class=\"col-xs-3 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"home()\">Home</button>\n		</div>\n	</div>\n	<div class= \"row\" style=\"margin-top:2%\">\n		<div class=\"col-xs-1\">\n		</div>\n\n		<div class=\"col-xs-10\">\n			<table class=\"table table-bordered\" >\n				<tr>\n					<th ng-repeat=\"header in headers\" style=\"width:{{test}}%; text-align:center;\"><span>{{header.title}}</span></th>\n				</tr>\n				<tr ng-repeat=\"datalist in datalists | pagination: curPage * pageSize | limitTo: pageSize\">\n					<td style=\"text-align:center;\"><span>{{ datalist.name }} </span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.rating }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.season }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.episodes }} </span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.onair }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.day }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.m_rating }} </span></td>\n\n				</tr>\n\n			</table>\n		</div>\n\n		<div class=\"col-xs-1\"></div>\n	</div>\n        \n    <div class=\"row\" ng-show=\"datalists.length\">\n		<div class=\"col-xs-4 text-center\">\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isFirstPage()\" ng-click=\"reduceCurrentPage()\"> &lt; PREV</button>\n			<span>Page {{curPage + 1}} of {{ numberOfPages() }}</span>\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isLastPage()\" ng-click=\"increaseCurrentPage()\">NEXT &gt;</button>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n		</div>\n	</div>\n</div>\n");
$templateCache.put("app/components/anime/editAnime.html","<div ng-controller=\"addAnimeContoller\">\n	\n	<div class=\"row\">\n		<div class=\"col-xs-1\">\n		</div>\n		<div class=\"col-xs-4 text-center\" style=\"overflow: hidden;\">\n			<p>Anime Per Page</p>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\">Add New Entry</button>\n		</div>\n		<div class=\"col-xs-3 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"home()\">Home</button>\n		</div>\n	</div>\n	\n        \n    \n</div>");
$templateCache.put("app/components/header/header.html","<div class=\"row\" ng-controller=\"headerController as headerCtrl\">\n<h1 class=\"row page-header\">\n	<p class=\"text-center\" ng-bind=\"headerCtrl.title\"></p>\n</h1>\n</div>");
$templateCache.put("app/components/home/home.html","<div id=\"home\" ng-controller=\"homeController as homeCtrl\">\n<div class=\"row\" style=\"margin-top:3%\">\n	<div class=\"col-xs-1\">\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\n	</div>\n	<div class=\"col-xs-1\">\n	</div>\n</div>\n\n<div class=\"row\" style=\"margin-top:3%\">\n	<div class=\"col-xs-1\">\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchShows()\">Shows</button>\n	</div>\n	<div class=\"col-xs-5 text-center\">\n		<button style=\"display: block; width: 100%;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"homeCtrl.fetchAnime()\">Anime</button>\n	</div>\n	<div class=\"col-xs-1\">\n	</div>\n</div>\n\n</div>");
$templateCache.put("app/components/shows/addShow.html","<div ng-controller=\"addShowContoller\">\n\n		<div class=\"row\" style=\"margin-top:3%\">\n			<div class=\"col-xs-1\">\n			</div>\n			<div class=\"col-xs-5 text-center\">\n				<input ng-model=\"name\" class=\"form-control\" type=\"text\" name=\"name\">\n			</div>\n			<div class=\"col-xs-5 text-center\">\n				<input ng-model=\"rating\" class=\"form-control\" type=\"text\" name=\"name\">\n			</div>\n			<div class=\"col-xs-1\">\n			</div>\n		</div>\n\n        \n    \n</div>");
$templateCache.put("app/components/shows/editShow.html","<div ng-controller=\"editShowContoller\">\n	\n	<div class=\"row\">\n		<div class=\"col-xs-1\">\n		</div>\n		<div class=\"col-xs-4 text-center\" style=\"overflow: hidden;\">\n			<p>Show Per Page</p>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\">Add New Entry</button>\n		</div>\n		<div class=\"col-xs-3 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"home()\">Home</button>\n		</div>\n	</div>\n	\n        \n    \n</div>");
$templateCache.put("app/components/shows/shows.html","<div ng-controller=\"showContoller\" ng-init=\"showData()\">\n	\n	<div class=\"row\">\n		<div class=\"col-xs-1\">\n		</div>\n		<div class=\"col-xs-4 text-center\" style=\"overflow: hidden;\">\n			<p>Show Per Page</p>\n			<select class=\"chosen-container\" ng-options=\"option.name for option in data.availableOptions track by option.id\" ng-change=\"changedValue(data.selectedOption)\"\n					ng-model=\"data.selectedOption\">\n			</select>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"addNewShow()\">Add New Entry</button>\n		</div>\n		<div class=\"col-xs-3 text-center\">\n			<button style=\"display: block;\" class=\"btn btn-default\" type=\"submit\" ng-click=\"home()\">Home</button>\n		</div>\n	</div>\n	<div class= \"row\" style=\"margin-top:2%\">\n\n		<div class=\"col-xs-1\"></div>\n		<div class=\"col-xs-10\">\n			<table class=\"table table-bordered\" >\n				<tr>\n					<th ng-repeat=\"header in headers\" style=\"width:{{test}}%; text-align:center;\"><span>{{header.title}}</span></th>\n				</tr>\n				<tr ng-repeat=\"datalist in datalists | pagination: curPage * pageSize | limitTo: pageSize\">\n					<td style=\"text-align:center;\"><span>{{ datalist.name }} </span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.rating }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.season }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.episodes }} </span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.onair }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.day }}</span></td>\n					<td style=\"text-align:center;\"><span>{{ datalist.m_rating }} </span></td>\n\n				</tr>\n			</table>\n		</div>\n\n		<div class=\"col-xs-1\"></div>\n	</div>\n        \n    <div class=\"row\" ng-show=\"datalists.length\">\n		<div class=\"col-xs-4 text-center\">\n		</div>\n		<div class=\"col-xs-4 text-center\">\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isFirstPage()\" ng-click=\"reduceCurrentPage()\"> &lt; PREV</button>\n			<span>Page {{curPage + 1}} of {{ numberOfPages() }}</span>\n			<button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"isLastPage()\" ng-click=\"increaseCurrentPage()\">NEXT &gt;</button>\n		</div>\n		<div class=\"col-xs-4 text-center\">\n		</div>\n	</div>\n</div>\n");}]);