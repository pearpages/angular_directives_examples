(function() {
	"use strict"

	angular.module("app")
	.directive("myAppUserInfoCard", [myAppUserInfoCard]);

	function myAppUserInfoCard() {
		return {
			templateUrl: "app/directives/userInfoCard/userInfoCard.html",
			restrict: "E",
			controllerAs: 'vm',
			scope: {
				user: '=',
				collapsed: '@init'
			},
			bindToController: true,
			controller: controller
		};

		function controller() {
			var vm = this;

			vm.collapsedState = (vm.collapsed === 'true');
			vm.knightMe = knightMe;
			vm.collapse = collapse;

			function collapse() {
				vm.collapsedState = !vm.collapsedState;
			}

			function knightMe() {
				vm.user.rank = "knight";
			}
		}
	}
})();