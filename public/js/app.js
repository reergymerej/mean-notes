'use strict';

angular.module('mean', [
	'ngCookies',
	'ngResource',
	'ui.bootstrap',
	'ui.router',
	'mean.system',
	'mean.articles',
	'mean.notes',
    'mean.categories'
]);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.notes', []);
angular.module('mean.categories', []);