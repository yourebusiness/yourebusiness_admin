var DI = ['ui.bootstrap', 'ebizController', 'ebizModule', 'ngRoute'];

var app = angular.module('ebiz', DI);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/log-out', {
				template: "<h5>Logged-out</h5>",
				controller: 'log-out'
			}).
			when('/hr', {
				templateUrl: 'partials/hr-tbl.html',
				controller: 'humanResourceCtrl'
			}).
			when('/app/:access_token', {
				templateUrl: 'partials/login.html',
				controller: 'beaconCtrl'
			}).
			when('/', {
				templateUrl: 'partials/welcome.html',
				controller: 'welcomeCtrl'
			})
	}
]);