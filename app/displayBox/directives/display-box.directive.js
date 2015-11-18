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
			controllerAs: 'vmd',
			bindToController: true,
			transclude:true,
		};

		function controller() {
			var vmd = this;
			vmd.hidden = false;
			vmd.close = close;

			function close() {
				vmd.hidden = true;
			}

		}
	}
})();