'use strict';

var ebizController = angular.module('ebizController', []);

ebizController.controller('treeController', function($scope) {
	$scope.tree = [
		{
			name: "Administration",
			link: "#",
			subtree: [{
				name: "Set up",
				link: "#"
			}]
		}, {
			name: "divider",
			link: "#"
		}, {
			name: "Business Partners",
			link: "#",
			subtree: [{
			  name: "Master Data",
			  link: "#"
			}]
		}, {
			name: "divider",
			link: "#"
		}, {
			name: "Human Resource",
			link: "#",
			subtree: [{
			  name: "Employee Records",
			  link: "/#/hr"
			}]
		}, {
			name: "divider",
			link: "#"
		},{
			name: "Reports",
			link: "#",
			subtree: [{
			  name: "Transactions",
			  link: "#"
			}]
		}
	];
});

ebizController.controller('humanResource', ['$scope',
	function($scope) {
		$scope.records = [
			{userId: "1", username: "abs@yopmail.com", fName: "Jhunex", lName: "Morcilla"},
			{userId: "2", username: "simply.amazing.wizard@gmail.com", fName: "Jhun", lName: "Pio"},
			{userId: "3", username: "ricky_abong@yahoo.com", fName: "Ricky", lName: "Abong"}
		];
	}
]);

ebizController.controller('beaconCtrl', ['$scope', '$routeParams', '$http', '$location',
	function($scope, $routeParams, $http, $location) {
		var absUrl = "http://yourebusinessrest.com/resource.php";
		var data = {"access_token": $routeParams.access_token};

		var successCallback = function(response) {
			window.sessionStorage.setItem("access_token", $routeParams.access_token);
			$location.path('/');
			console.log("Success.");
		}
		var errorCallback = function(response) {
			console.log("Error.");
		}

		$http.post(absUrl, data).then(successCallback, errorCallback);
	}
]);

ebizController.controller('welcomeCtrl', ['$scope', '$location', '$window',
	function($scope, $location, $window) {
		if (typeof(Storage) !== "undefined") {
			if (!sessionStorage.getItem("access_token")) {
				$window.location.href = "http://localhost:8080/#/login";
			}
		} else {
			console.log("No web storage support.");
		}
	}
]);