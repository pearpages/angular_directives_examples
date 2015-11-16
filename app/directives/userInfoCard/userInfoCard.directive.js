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

			vm.knightMe = knightMe;

			function knightMe() {
				vm.user.rank = "knight";
			}
		}
	}
})();