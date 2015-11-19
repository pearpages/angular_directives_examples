(function() {
	'use strict';

	angular.module("app")
	.directive('myAppPanel',[myAppPanel]);

	function myAppPanel() {
		return {
			restrict: 'E',
			bindToController:true,
			controllerAs: 'vmd',
			controller: controller,
			transclude:true,
			scope:{
				title: '@',
				collapsed: '@',
				myMethod: '&'
			},
			templateUrl: 'app/droid/directives/panel/panel.html'
		};

		function controller() {
			var vmd = this;

			vmd.collapse = collapse;
			vmd.myAction = myAction;
			vmd.collapsed;

			activate();

			function activate() {
				vmd.collapsed = (vmd.collapsed === 'true');
			}

			function collapse() {
				vmd.collapsed = !vmd.collapsed;
			}

			function myAction($event) {
				$event.stopPropagation();
				alert('panel directive functionality');
				vmd.myMethod();
			}
		}
	}
})();