(function (){
	'use strict'

	angular.module('app')
	.directive('myAppStateDisplay',myAppStateDisplay);

	function myAppStateDisplay() {
		return {
			link:link
		};

		function link(scope,el,attrs) {
			scope.$watch(attrs['stateDisplay'],function (newVal,oldVAl) {
				switch(newVal){
				case 0:
				el.css('background-color','white');
				break;
				case 1:
				el.css('background-color','yellow');
				break;
				case 2:
				el.css('background-color','red');
				break;
			}
			});
		}
	}
})();