(function (){
	"use strict"

	angular.module("app")
	.directive('myAppAddress',myAppAddress);

	function myAppAddress() {
		return {
			scope: {
				user : '='
			},
			restrict: 'E',
			templateUrl: 'app/userCards/directives/address/address.html',
			controller: controller,
			controllerAs: 'vm',
			bindToController: true
		}

		function controller() {
			var vm = this;

			vm.collapsed = false;
			vm.collapseAddress = collapseAddress;
			vm.expandAddress = expandAddress;

			function collapseAddress() {
				vm.collapsed = true;
			}
			function expandAddress() {
				vm.collapsed = false;
			}
		}
	}
})();