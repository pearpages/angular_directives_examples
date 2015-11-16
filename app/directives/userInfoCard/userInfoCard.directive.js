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
				user: '='
			},
			bindToController: true,
			controller: controller
		};

		function controller() {
			var vm = this;

			vm.collapsed = false;
			vm.knightMe = knightMe;
			vm.collapse = collapse;

			function collapse() {
				vm.collapsed = !vm.collapsed;
			}

			function knightMe() {
				vm.user.rank = "knight";
			}
		}
	}
})();