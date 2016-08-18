var app = angular.module('ebiz', ['ui.bootstrap']);

app.controller('treeController', function($scope) {
	/*$scope.callMe = function() {
		alert("test");
	};*/

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
			  name: "Employees Records",
			  link: "#"
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

app.directive('tree', function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      tree: '='
    },
    templateUrl: 'navbar/template-ul.html'
  };
});

app.directive('leaf', function($compile) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      leaf: "="
    },
    templateUrl: 'navbar/template-li.html',
    link: function(scope, element, attrs) {
      if (angular.isArray(scope.leaf.subtree)) {
        element.append("<tree tree='leaf.subtree'></tree>");
        element.addClass('dropdown-submenu');
        $compile(element.contents())(scope);
      } else {
        element.bind('click', function() {
          alert("You have clicked on " + scope.leaf.name);
        });

      }
    }
  };
});