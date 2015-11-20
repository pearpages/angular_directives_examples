(function() {
	'use strict';

	angular.module("app")
	.directive('myLazyRender',[myLazyRender]);

	function myLazyRender() {
		return {
				restrict: 'A',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				transclude: 'element',
				priority: 1200, //ng-repeat priority is 1000
				link: link
			};

			function link(scope,el,attr,ctrl,transclude) {
				var hasBeenShown = false;
				var unwatchFn = scope.$watch(attr.myLazyRender, function(newValue, oldValue) {
					if(newValue && !hasBeenShown){
						hasBeenShown = true;
						transclude(scope, function(clone) {
							el.after(clone);
						});
						unwatchFn();
					}
				});
			}
		
			function controller() {
				var vmd = this;
		
				activate();
		
				function activate() {
					
				}
			}
	}
})();