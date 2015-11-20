(function() {
	'use strict';

	angular.module("app")
	.directive('myAdvTrans',[myAdvTrans]);

	function myAdvTrans() {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				transclude: true,
				templateUrl: 'app/advTrans/directives/adv-trans.html'
			};
		
			function controller() {
				var vmd = this;
		
				activate();
		
				function activate() {
					
				}
			}
	}
})();