(function (){
	'use strict'

	angular.module('app')
	.directive('myAppStateDisplay',myAppStateDisplay);

	function myAppStateDisplay() {
		return {
			link:link
		};

		function link(scope,el,attrs) {
			var linkVar = attrs['stateDisplay']
			var colors = attrs['sateDisplayColors'].split(' ');

			scope.$watch(attrs['stateDisplay'],function (newVal,oldVAl) {
				el.css('background-color',colors[newVal]);
				
			});
		}
	}
})();