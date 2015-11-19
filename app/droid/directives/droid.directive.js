(function() {
	'use strict';

	angular.module("app")
	.directive('myAppDroid',[myAppDroid]);

	function myAppDroid() {
		return {
			templateUrl: "app/droid/directives/droid.html",
			restrict: "E",
			controllerAs: 'vm',
			scope: {
				droid: '=',
				collapsed: '@init'
			},
			bindToController: true,
			controller: controller
		};

		function controller() {
			var vm = this;

			vm.collapsedState;
			vm.collapse = collapse;
			vm.nextState = nextState;

			activate();

			function activate() {
				vm.collapsedState = (vm.collapsed === 'true');
			}

			function collapse() {
				vm.collapsedState = !vm.collapsedState;
			}

			function nextState() {
				vm.droid.level++;
				vm.droid.level = vm.droid.level % 4;
			}
			
		}
	}
})();