(function (){
	'use strict'

	angular.module('app')
	.directive('fontScale', fontScale);

	function fontScale() {
		return {
			link: link
		}

		function link(scope,el,attrs) {
			scope.$watch(attrs['fontScale'], function (newVal, oldVal) {
				//olVals is unused but is kept as an example
				el.css('font-size', newVal + '%');
			});
		}
	}

})();