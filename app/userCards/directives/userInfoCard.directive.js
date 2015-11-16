(function() {
	"use strict"

	angular.module("app")
	.directive("myAppUserInfoCard", [myAppUserInfoCard]);

	function myAppUserInfoCard() {
		return {
			templateUrl: "app/userCards/directives/userInfoCard.html",
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
			vm.removeFriend = removeFriend;
			
			function collapse() {
				vm.collapsedState = !vm.collapsedState;
			}

			function knightMe() {
				vm.user.rank = "knight";
			}

			function removeFriend(friend) {
				var idx = vm.user.friends.indexOf(friend);

				if(idx > -1){
					vm.user.friends.splice(idx,1);
				}
			}

		}
	}
})();