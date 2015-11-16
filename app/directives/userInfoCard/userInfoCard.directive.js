(function() {
	"use strict"

	angular.module("app")
	.directive("myAppUserInfoCard", [myAppUserInfoCard]);

	function myAppUserInfoCard() {
		return {
			templateUrl: "app/directives/userInfoCard/userInfoCard.html",
			restrict: "E",
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				vm.knightMe = knightMe;

				vm.user = {
					name: 'Luke Skywalker',
					address: {
						street: 'PO Box 123',
						city: 'Secret Rebel Base',
						planet: 'Yavin 4'
					},
					friends: [
					'Han',
					'Leia',
					'Chewbacca'
					]
				};

				function knightMe(user) {

					user.rank = "knight";
				}
			}
		}
	}
})();