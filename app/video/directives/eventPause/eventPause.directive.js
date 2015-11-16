(function() {
	"use strict"

	angular.module("app")
	.directive('eventPause',['$parse',eventPause]);

	function eventPause($parse) {
		return {
			restrict: 'A',
			link: link
		};

		function link(scope,el,attrs) {
			var fn = $parse(attrs['eventPause']);
			el.on('pause',function (event) {
				scope.$apply(function () {
					fn(scope, {evt: event});
				});
			});
		}
	}
})();