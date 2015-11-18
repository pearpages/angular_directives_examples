(function() {
	'use strict'

	angular.module('app')
	.directive('myAppDisplayBox',myAppDisplayBox);

	function myAppDisplayBox() {
		return {
			restrict: 'E',
			templateUrl: 'app/displaybox/directives/display-box.html',
			controller: controller,
			scope:{
				mycolor: '@'
			},
			controllerAs: 'vm',
			bindToController: true,
			transclude:true,
		};

		function controller() {
			var vm = this;
			vm.hidden = false;
			vm.close = close;

			function close() {
				vm.hidden = true;
			}

		}
	}
})();