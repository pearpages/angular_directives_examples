(function (){
	"use strict"

	angular.module("app")
	.directive('myAppRemoveFriend',myAppRemoveFriend);

	function myAppRemoveFriend() {
		return {
			scope: {
				notifyParent : '&method',
			},
			restrict: 'E',
			templateUrl: 'app/directives/userInfoCard/removeFriend/removeFriend.html',
			controller: controller,
			controllerAs: 'vm',
			bindToController: true
		}

		function controller() {
			var vm = this;

			vm.removing = false;
			vm.startRemove = startRemove;
			vm.cancelRemove = cancelRemove;
			vm.confirmRemove = confirmRemove;
		
			function startRemove() {
				vm.removing = true;
			}

			function confirmRemove() {
				vm.notifyParent();
			}

			function cancelRemove() {
				vm.removing = false;
			}

		}
	}
})();