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

ebizController.controller('welcome', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		// $scope.access_token = $routeParams.access_token;

		var abs_url = "http://yourebusinessrest.com/resource.php";
		var data = {"access_token": $routeParams.access_token};

		var successCallback = function(response) {
			console.log("Success callback.");
		}

		var errorCallback = function(response) {
			console.log("Error callback.");
		}

		$http.post(abs_url, data).then(successCallback, errorCallback);
	}
]);