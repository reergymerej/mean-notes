'use strict';

angular.module('mean', [
	'ngCookies',
	'ngResource',
	'ui.bootstrap',
	'ui.router',
	'mean.system',
	'mean.articles',
	'mean.notes'
]);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.notes', []);